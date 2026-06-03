"""
Shared fixtures and constants for the consent test suite.

A session-scoped fixture starts a plain `http.server` in a subprocess serving
`cancer-detective-pro/` on a free port, so tests do not depend on a running
docker stack.
"""
from __future__ import annotations

import socket
import subprocess
import sys
import time
from pathlib import Path
from urllib.request import urlopen
from urllib.error import URLError

import pytest

STORAGE_KEY = "cd_cookie_consent"
GA_SCRIPT_HOST_PATH = "googletagmanager.com/gtag/js"
GA_COLLECT_PATTERNS = ("/g/collect", "/collect")
GA_DOMAINS = ("google-analytics.com", "analytics.google.com")

SITE_ROOT = Path(__file__).resolve().parent.parent / "cancer-detective-pro"


def _free_port() -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


def _wait_until_ready(url: str, timeout: float = 5.0) -> None:
    deadline = time.monotonic() + timeout
    last_err: Exception | None = None
    while time.monotonic() < deadline:
        try:
            urlopen(url, timeout=0.5).close()
            return
        except URLError as e:
            last_err = e
            time.sleep(0.05)
    raise RuntimeError(f"static server at {url} did not become ready: {last_err}")


@pytest.fixture(scope="session")
def base_url() -> str:
    port = _free_port()
    proc = subprocess.Popen(
        [
            sys.executable,
            "-m",
            "http.server",
            str(port),
            "--bind",
            "127.0.0.1",
            "--directory",
            str(SITE_ROOT),
        ],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    url = f"http://127.0.0.1:{port}/"
    try:
        _wait_until_ready(url)
        yield url
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=5)
        except subprocess.TimeoutExpired:
            proc.kill()


def is_ga_collect(url: str) -> bool:
    return any(d in url for d in GA_DOMAINS) and any(p in url for p in GA_COLLECT_PATTERNS)


def is_ga_script(url: str) -> bool:
    return GA_SCRIPT_HOST_PATH in url
