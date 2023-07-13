# W-13602369 - Signature US Only - 44739180 - State Farm Associate Contact Center - force:recordData not seeing record updates - recordUpdated event is not always being fired

## Repro
1. Clone this repository
2. Deploy to scratch org (might need to use --force-overwrite)
3. Create a Case
4. Make sure the Case is using the flexipage Single_Column
5. On Case RH, change the Status field and save
6. Note that the Aura component above the detail panel will not always update with the new status

If you wait 30s it will update, so you have to refresh, and then change the status quickly.

If you add the LWC component recordUpdatedLwc to the flexipage, then the problem goes away.