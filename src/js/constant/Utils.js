export const Month = {
 1: 'January', 
 2: 'February', 
 3: 'March', 
 4: 'April', 
 5: 'May', 
 6: 'June', 
 7: 'July', 
 8: 'August', 
 9: 'September', 
 10: 'October ', 
 11: 'November', 
 12: 'December', 
};
export const Year = [2017, 2018];
export const Days ={
    1: 'SUN',
    2: 'MON',
    3: 'TUE',
    4: 'WED',
    5: 'THUR',
    6: 'FRI',
    7: 'SAT',
};

export const sampleJSONData = formData();

function formData(){
    const preSampleData = [];
    for( var count=0; count<4; count++){
        if(count<3){
            preSampleData.push({
                name: 'Billed',
                domain: 'domain'+count,
                role:'role'+count,
                activity: 'MS'+1,
                ...dayColumnData(),
                remarks: '',
            });
        }else{
            preSampleData.push({
                name: 'Billed',
                domain: 'domain'+count,
                role:'Travelling',
                activity: 'Travelling',
                ...dayColumnData(),
                remarks: '',
            });
        }
        
    }
    return preSampleData;
}
function dayColumnData(){
    let dayColumn = {};
    for(var i=1; i<= 31; i++){
        dayColumn[i] =  '';
    }
    return dayColumn;
}