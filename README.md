# W-13758089 - Microchip Technology Inc - force:recordData not seeing record updates - recordUpdated event is not fired for Non-Admin Users
## Repro
1. Clone this repository branch
2. Deploy to scratch org (might need to use --force-overwrite)
3. Create an Opportunity
5. On Case RH, change the Stage field
6. Note that the Aura component on the bottom right does not update the stage

This has to do with the Probability field not being readable by the user.  FLS has restricted it.

So the field is requested by the lwcDetailPanel, and when LDS evaluates the aura component for possible emit, the Probability field is Pending.
However, it never resolves since it is not visible on the layout.

In 242 there are 2 getRecordWithFields requests for the detail panel, and the second one removes the field from the store.  This might be a ADG/Komaci issue.
