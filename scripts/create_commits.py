import subprocess
import os
import sys

def run(cmd):
    result = subprocess.run(cmd, shell=True, text=True, capture_output=True)
    if result.returncode != 0:
        print(f"Error executing {cmd}:\n{result.stderr}")
    return result

def commit(msg, files=None):
    if files:
        run(f"git add {' '.join(files)}")
    else:
        run("git add -A")
    res = run(f'git commit -m "{msg}"')
    print(res.stdout.strip())

def push():
    print("Pushing to origin main...")
    res = run("git push origin main")
    print(res.stdout.strip())
    if res.stderr:
        print(res.stderr.strip())

def get_commit_count():
    res = run("git rev-list --count HEAD")
    return int(res.stdout.strip())

print(f"Starting from commit count: {get_commit_count()}")

