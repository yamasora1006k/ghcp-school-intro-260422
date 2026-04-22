
## コミットを取り消すコマンド

- 直前のコミットだけ取り消す（変更は残す）  
    `git reset --soft HEAD~1`
- 直前のコミットと変更を取り消す  
    `git reset --hard HEAD~1`
- すでに push 済みのコミットを打ち消す  
    `git revert <コミットID>`

