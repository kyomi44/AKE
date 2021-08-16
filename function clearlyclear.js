function clearlyclear() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    ss.setActiveSheet(ss.getSheetByName('Quote Builder'), true);

    ss.getRangeList(['c2:c6', 'c8', 'c10', 'c16', 'c18', 'c26:c35',]).activate().clear({contentsOnly: true, skipFilteredRows: true});
}