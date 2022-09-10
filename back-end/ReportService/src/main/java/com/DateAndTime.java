package com;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class DateAndTime {
	public static String dateTime() {

		ZonedDateTime time1 = ZonedDateTime.now();
		DateTimeFormatter f = DateTimeFormatter.ofPattern("E MMM dd yyyy HH:mm:ss");
		String currentTime = time1.format(f);
		return currentTime;
	}



	// to get today's date in E MM dd format
	public static String today() {

		ZonedDateTime time1 = ZonedDateTime.now();
		DateTimeFormatter f = DateTimeFormatter.ofPattern("E MMM dd yyyy");
		String currentdate = time1.format(f);
		return currentdate;
	}

	//to get this month in MMM format
	public static String thisMonth() {

		ZonedDateTime time1 = ZonedDateTime.now();
		DateTimeFormatter f = DateTimeFormatter.ofPattern("MMM");
		String currentdate = time1.format(f);
		return currentdate;
	}

}
