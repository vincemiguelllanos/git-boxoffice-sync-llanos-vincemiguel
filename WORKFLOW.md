# Git Multi-Contributor Workflow Lab

**Contributor:** Vince Miguel Llanos (`llanos.vincemiguel`)
**Repository:** `git-boxoffice-sync-llanos-vincemiguel`

---

## 1. Group Discount Feature (Clone A)
- Added a 10% group discount for orders of 5 or more tickets in `calculateTicketPrice`.
- Verified changes with unit tests and pushed directly to `feature/group-pricing`.

## 2. Divergent Change & Rejected Push (Clone B)
- Updated `calculateTicketPrice` to use `Math.round` instead of truncation.
- Push was rejected because the remote origin contained new commits from Clone A.

## 3. Merge Conflict Resolution (Clone B)
- Fetched latest remote changes and merged `origin/feature/group-pricing`.
- Resolved merge conflict in `tickets.js` by combining group pricing with price rounding.
- Pushed combined changes successfully.

## 4. VIP Surcharge & Second Divergent Push (Clone C)
- Added a 15% VIP surcharge parameter option to `calculateTicketPrice`.
- Push was rejected due to incoming remote changes from Clone B's merge.

## 5. Rebase Conflict Resolution (Clone C)
- Performed `git rebase origin/feature/group-pricing` to replay local commits over remote tip.
- Resolved conflict in `tickets.js` by integrating group pricing, VIP surcharge, and rounding.
- Pushed rebased feature branch cleanly to remote repository.

---

## Screenshots
1. Task 1 (Initial Push): `screenshots/task1.png`
2. Task 2 (Rejected Push): `screenshots/task2.png`
3. Task 3 (Merge Resolution): `screenshots/task3.png`
4. Task 4 (Second Rejected Push): `screenshots/task4.png`
5. Task 5 (Rebase Resolution): `screenshots/task5.png`