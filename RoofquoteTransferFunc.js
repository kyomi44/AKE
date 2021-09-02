function TransferFunc() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    const array = [];

    array[0] = ss.getRange("Quote Builder!c2").getValue(); // Client Name
    array[1] = ss.getRange("Quote Builder!c3").getValue(); // Client Address
    array[2] = ss.getRange("Quote Builder!c8").getValue(); // Date Quoted
    array[3] = ss.getRange("Quote Builder!c7").getValue(); // Region
    array[4] = ss.getRange("Quote Builder!c4").getValue(); // Material
    array[5] = ss.getRange("Quote Builder!c6").getValue(); // Quoted By
    array[6] = ss.getRange("Quote Builder!e57").getValue(); // Total Cash Price
    array[7] = ss.getRange("Quote Builder!e59").getValue(); // Total Finance Price
    array[8] = ss.getRange("Quote Builder!c15").getValue(); // Total Field Squares (pitched)
    array[9] = ss.getRange("Quote Builder!c14").getValue(); // Waste (pitched)
    array[10] = ss.getRange("Quote Builder!c22").getValue(); // Total Flat Squares
    array[11] = ss.getRange("Quote Builder!c21").getValue(); // Waste (flat)
    array[12] = ss.getRange("Quote Builder!c27").getValue(); // 8/12 pitch
    array[13] = ss.getRange("Quote Builder!c28").getValue(); // 9/12 pitch
    array[14] = ss.getRange("Quote Builder!c29").getValue(); // 10/12 pitch
    array[15] = ss.getRange("Quote Builder!c30").getValue(); // 11/12 & above 
    array[16] = ss.getRange("Quote Builder!c31").getValue(); // Chimney Cricket
    array[17] = ss.getRange("Quote Builder!c32").getValue(); // Skylight
    array[18] = ss.getRange("Quote Builder!c33").getValue(); // 2 story roof labor
    array[19] = ss.getRange("Quote Builder!c34").getValue(); // Detach and reset hot water solar:
    array[20] = ss.getRange("Quote Builder!c35").getValue(); // Detach and reset PV Panels
    array[21] = ss.getRange("Quote Builder!c36").getValue(); // drop and carry
    array[22] = ss.getRange("Quote Builder!d37").getValue(); // Tile to Shingle
    array[23] = ss.getRange("Quote Builder!c38").getValue(); // Extra adder 1
    array[24] = ss.getRange("Quote Builder!c39").getValue(); // Extra adder 2
    array[25] = ss.getRange("Quote Builder!c40").getValue(); // Extra adder 3
    array[26] = ss.getRange("Quote Builder!c41").getValue(); // Extra adder 4
    array[27] = ss.getRange("Quote Builder!e49").getValue(); // Total Roof Adders
    array[28] = ss.getRange("Quote Builder!e51").getValue(); // Total Roof Cost before Mark Up
    array[29] = ss.getRange("Quote Builder!e53").getValue(); // Total Price Before Hidden Damage
    array[30] = ss.getRange("Quote Builder!e55").getValue(); // Hidden Damage to add
    array[31] = ss.getRange("Quote Builder!d55").getValue(); // Hidden % 
    array[32] = ss.getRange("Quote Builder!c24").getValue(); // Starting Roof Price

    
    /*
    for (let i = 0; i < 31; i++)
    {
        array[i] = 
    }
    */

    var destSheet = ss.getSheetByName("Automatic Quote Log");

    destSheet.appendRow(array);

}

function TransferFunc2() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    const array = [];

    array[0] = ss.getRange("Quote Builder (2)!c2").getValue(); // Client Name
    array[1] = ss.getRange("Quote Builder (2)!c3").getValue(); // Client Address
    array[2] = ss.getRange("Quote Builder (2)!c8").getValue(); // Date Quoted
    array[3] = ss.getRange("Quote Builder (2)!c7").getValue(); // Region
    array[4] = ss.getRange("Quote Builder (2)!c4").getValue(); // Material
    array[5] = ss.getRange("Quote Builder (2)!c6").getValue(); // Quoted By
    array[6] = ss.getRange("Quote Builder (2)!e57").getValue(); // Total Cash Price
    array[7] = ss.getRange("Quote Builder (2)!e59").getValue(); // Total Finance Price
    array[8] = ss.getRange("Quote Builder (2)!c15").getValue(); // Total Field Squares (pitched)
    array[9] = ss.getRange("Quote Builder (2)!c14").getValue(); // Waste (pitched)
    array[10] = ss.getRange("Quote Builder (2)!c22").getValue(); // Total Flat Squares
    array[11] = ss.getRange("Quote Builder (2)!c21").getValue(); // Waste (flat)
    array[12] = ss.getRange("Quote Builder (2)!c27").getValue(); // 8/12 pitch
    array[13] = ss.getRange("Quote Builder (2)!c28").getValue(); // 9/12 pitch
    array[14] = ss.getRange("Quote Builder (2)!c29").getValue(); // 10/12 pitch
    array[15] = ss.getRange("Quote Builder (2)!c30").getValue(); // 11/12 & above 
    array[16] = ss.getRange("Quote Builder (2)!c31").getValue(); // Chimney Cricket
    array[17] = ss.getRange("Quote Builder (2)!c32").getValue(); // Skylight
    array[18] = ss.getRange("Quote Builder (2)!c33").getValue(); // 2 story roof labor
    array[19] = ss.getRange("Quote Builder (2)!c34").getValue(); // Detach and reset hot water solar:
    array[20] = ss.getRange("Quote Builder (2)!c35").getValue(); // Detach and reset PV Panels
    array[21] = ss.getRange("Quote Builder (2)!c36").getValue(); // drop and carry
    array[22] = ss.getRange("Quote Builder (2)!d37").getValue(); // Tile to Shingle
    array[23] = ss.getRange("Quote Builder (2)!c38").getValue(); // Extra adder 1
    array[24] = ss.getRange("Quote Builder (2)!c39").getValue(); // Extra adder 2
    array[25] = ss.getRange("Quote Builder (2)!c40").getValue(); // Extra adder 3
    array[26] = ss.getRange("Quote Builder (2)!c41").getValue(); // Extra adder 4
    array[27] = ss.getRange("Quote Builder (2)!e49").getValue(); // Total Roof Adders
    array[28] = ss.getRange("Quote Builder (2)!e51").getValue(); // Total Roof Cost before Mark Up
    array[29] = ss.getRange("Quote Builder (2)!e53").getValue(); // Total Price Before Hidden Damage
    array[30] = ss.getRange("Quote Builder (2)!e55").getValue(); // Hidden Damage to add
    array[31] = ss.getRange("Quote Builder (2)!d55").getValue(); // Hidden % 
    array[32] = ss.getRange("Quote Builder (2)!c24").getValue(); // Starting Roof Price

    
    /*
    for (let i = 0; i < 31; i++)
    {
        array[i] = 
    }
    */

    var destSheet = ss.getSheetByName("Automatic Quote Log");

    destSheet.appendRow(array);

}

function TransferFunc3() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    const array = [];

    array[0] = ss.getRange("Quote Builder (3)!c2").getValue(); // Client Name
    array[1] = ss.getRange("Quote Builder (3)!c3").getValue(); // Client Address
    array[2] = ss.getRange("Quote Builder (3)!c8").getValue(); // Date Quoted
    array[3] = ss.getRange("Quote Builder (3)!c7").getValue(); // Region
    array[4] = ss.getRange("Quote Builder (3)!c4").getValue(); // Material
    array[5] = ss.getRange("Quote Builder (3)!c6").getValue(); // Quoted By
    array[6] = ss.getRange("Quote Builder (3)!e57").getValue(); // Total Cash Price
    array[7] = ss.getRange("Quote Builder (3)!e59").getValue(); // Total Finance Price
    array[8] = ss.getRange("Quote Builder (3)!c15").getValue(); // Total Field Squares (pitched)
    array[9] = ss.getRange("Quote Builder (3)!c14").getValue(); // Waste (pitched)
    array[10] = ss.getRange("Quote Builder (3)!c22").getValue(); // Total Flat Squares
    array[11] = ss.getRange("Quote Builder (3)!c21").getValue(); // Waste (flat)
    array[12] = ss.getRange("Quote Builder (3)!c27").getValue(); // 8/12 pitch
    array[13] = ss.getRange("Quote Builder (3)!c28").getValue(); // 9/12 pitch
    array[14] = ss.getRange("Quote Builder (3)!c29").getValue(); // 10/12 pitch
    array[15] = ss.getRange("Quote Builder (3)!c30").getValue(); // 11/12 & above 
    array[16] = ss.getRange("Quote Builder (3)!c31").getValue(); // Chimney Cricket
    array[17] = ss.getRange("Quote Builder (3)!c32").getValue(); // Skylight
    array[18] = ss.getRange("Quote Builder (3)!c33").getValue(); // 2 story roof labor
    array[19] = ss.getRange("Quote Builder (3)!c34").getValue(); // Detach and reset hot water solar:
    array[20] = ss.getRange("Quote Builder (3)!c35").getValue(); // Detach and reset PV Panels
    array[21] = ss.getRange("Quote Builder (3)!c36").getValue(); // drop and carry
    array[22] = ss.getRange("Quote Builder (3)!d37").getValue(); // Tile to Shingle
    array[23] = ss.getRange("Quote Builder (3)!c38").getValue(); // Extra adder 1
    array[24] = ss.getRange("Quote Builder (3)!c39").getValue(); // Extra adder 2
    array[25] = ss.getRange("Quote Builder (3)!c40").getValue(); // Extra adder 3
    array[26] = ss.getRange("Quote Builder (3)!c41").getValue(); // Extra adder 4
    array[27] = ss.getRange("Quote Builder (3)!e49").getValue(); // Total Roof Adders
    array[28] = ss.getRange("Quote Builder (3)!e51").getValue(); // Total Roof Cost before Mark Up
    array[29] = ss.getRange("Quote Builder (3)!e53").getValue(); // Total Price Before Hidden Damage
    array[30] = ss.getRange("Quote Builder (3)!e55").getValue(); // Hidden Damage to add
    array[31] = ss.getRange("Quote Builder (3)!d55").getValue(); // Hidden % 
    array[32] = ss.getRange("Quote Builder (3)!c24").getValue(); // Starting Roof Price

    
    /*
    for (let i = 0; i < 31; i++)
    {
        array[i] = 
    }
    */

    var destSheet = ss.getSheetByName("Automatic Quote Log");

    destSheet.appendRow(array);

}

function clearlyclear() {
    var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();


    ss.getRangeList(['c2:c6', 'c10', 'c12', 'c17', 'c19', 'c27:c36', 'c38:c41']).activate().clear({contentsOnly: true, skipFilteredRows: true});
    ss.getRange('C37').activate().setValue('FALSE');
}