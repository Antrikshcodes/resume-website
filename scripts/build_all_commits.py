import os
import subprocess
import json

def run(cmd):
    return subprocess.run(cmd, shell=True, text=True, capture_output=True)

def get_count():
    res = run("git rev-list --count HEAD")
    return int(res.stdout.strip())

def make_commit(msg, files=None):
    if files:
        run(f"git add {' '.join(files)}")
    else:
        run("git add -A")
    res = run(f'git commit -m "{msg}"')
    if res.returncode == 0:
        print(f"[{get_count()}] {msg}")
    else:
        # If nothing to commit, touch a subtle metadata or timestamp in .gitkeep or tracking
        pass

def write_and_commit(filepath, content, commit_msg):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    make_commit(commit_msg, [filepath])

def append_and_commit(filepath, content, commit_msg):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'a', encoding='utf-8') as f:
        f.write(content)
    make_commit(commit_msg, [filepath])

print(f"Current count: {get_count()}")

