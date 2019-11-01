function get_weather_stats(weatherData,cnt){
    /*
    INPUT
        weatherData: JSON data of a city's weather 
        cnt: number of rows that contain weather information (each row representing unique information)

    This function gets the maximum temperature and average humidity for each day (calendar day) and appends it into a table.

    NOTE: JSON data does not represent data of exactly 5 different days. It contains data of a city 
    over a period of 24hrs * 5. This means there can be 6 days, where the first and last day contain incomplete 
    information.  
        
    */
    //setting initial day and max temp according to first JSON row of weather data 
    var currentDate = new Date(weatherData[0].dt*1000);
    var maxTemp = weatherData[0].main.temp_max;
    var totalHumidity = 0;
    var counter = 0; // number of rows for each day. 

    for(var row in weatherData){
        //getting data of current row
        var timeStamp = weatherData[row].dt;
        var date = new Date(timeStamp*1000);
        var temp = weatherData[row].main.temp_max;
        var humidity = weatherData[row].main.humidity;

        //checking if date of the current row is the same as the date we are currently gathering information for
        if (date.getDate() === currentDate.getDate() && date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear()){
            //updating max temp
            if (maxTemp < temp ) maxTemp = temp;

            //increase humidity
            totalHumidity += humidity;
            
            counter +=1;

            //if current row is the last row (data from the last day) then append values to end of the table
            if (row == cnt-1){
                var avgHumidity = totalHumidity/counter;
                avgHumidity = avgHumidity.toPrecision(5);
                var strDate = currentDate.getDate() + '/'+ (currentDate.getMonth()+1)+'/'+ currentDate.getFullYear();
                $('#weatherTable').append('<tr><td>'+strDate+'</td><td>'+maxTemp+'</td><td>'+ avgHumidity+'</td></tr>');
            }

        }else{//data from different day
            //append values to table
            var avgHumidity = totalHumidity/counter;
            avgHumidity = avgHumidity.toPrecision(5);
            var strDate = currentDate.getDate()+'/'+(currentDate.getMonth()+1)+'/'+currentDate.getFullYear();
            $('#weatherTable').append('<tr><td>'+strDate+'</td><td>'+maxTemp+'</td><td>'+ avgHumidity+'</td></tr>');

            //update values
            currentDate = date;
            maxTemp = temp;
            totalHumidity = humidity;
            counter = 1;
        }
    }
}