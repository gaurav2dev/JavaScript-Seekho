// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.getUTCDate());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date("2023-01-04");
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.round(myTimeStamp / 1000));

let newDate = new Date("04-04-2023");
// console.log("The Date format : 'mm-dd-yy' ");
// console.log(
//   ` ${newDate.getDate()} - ${newDate.getMonth()}  - ${newDate.getFullYear()}`
// );
console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  })
);
/*-----------------------------------------------------NOTES------------------------------------------------------------------- */
// Note:- Syntax to provide date manually
/*
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);
const customDate = new Date(2023, 9, 13, 15, 30, 15, 0);
Understanding dates in JavaScript, from a beginner to a more advanced perspective, is essential for both coding and job interviews. Let's cover this topic in a comprehensive way, starting with beginner-level concepts and moving towards more advanced topics, including potential interview questions.

**Beginner Level**

1. **What is a Date in JavaScript?**
   - A Date in JavaScript represents a point in time. It can be used to work with dates and times.

2. **Creating a Date Object:**
   - To create a Date object, you can use the `new Date()` constructor, which can be called with or without arguments.

   ```javascript
   const currentDate = new Date();
   const specificDate = new Date('2023-10-13');
   ```

3. **Retrieving Date Components:**
   - You can access various components of a date (year, month, day, etc.) using Date object methods like `getFullYear()`, `getMonth()`, `getDate()`, and so on.

4. **Formatting Dates:**
   - JavaScript doesn't provide native formatting methods for dates. You may need to use libraries like `moment.js` or the `Intl.DateTimeFormat` object to format dates for display.

5. **Common Date Operations:**
   - You can perform operations like comparing dates, adding/subtracting time intervals, and calculating the difference between two dates.

**Intermediate Level**

6. **Timezones and UTC:**
   - Understanding timezones is crucial. JavaScript's `Date` object handles timezones, but it's important to know how to work with UTC (Coordinated Universal Time).

7. **Date Parsing:**
   - JavaScript can parse date strings using `Date.parse()` and `new Date(string)`. Know how different date formats are handled.

8. **Handling Date Input:**
   - In web development, you'll often need to work with date inputs in HTML forms. Learn how to handle user input and convert it into Date objects.

9. **Date Libraries:**
   - Explore external date libraries like `moment.js` or the more modern `date-fns` for advanced date manipulation and formatting.

**Advanced Level**

10. **Internationalization (i18n):**
    - Understand how to format dates for different locales and languages using the `Intl.DateTimeFormat` object.

11. **Working with Time Intervals:**
    - Learn to manipulate time intervals, such as adding or subtracting days, months, or years, and understanding potential edge cases.

12. **Date Arithmetic:**
    - Advanced interview questions might involve date arithmetic, such as finding the next occurrence of a specific day of the week or calculating the business days between two dates.

13. **Date and Performance:**
    - Know how to optimize date-related code for performance. Dates can be resource-intensive in high-frequency operations.

14. **JavaScript's Date Challenges:**
    - Be aware of JavaScript's quirks, such as how months are zero-indexed (0 for January) and how leap years work.

15. **ES6 Date Features:**
    - Stay updated on new JavaScript features. ES6 introduced the `Date` class with more features and improvements.

    // Advanced Level
    Certainly, let's delve into answering the advanced-level interview questions about working with dates in JavaScript:

1. **How do you handle timezones in JavaScript when working with dates and times?**

   Handling timezones in JavaScript can be complex due to the global nature of web applications. Here's how you can manage timezones effectively:

   - Use the `getTimezoneOffset()` method to get the time offset in minutes for the client's local timezone.
   - Always store and work with dates in UTC (Coordinated Universal Time) whenever possible to avoid timezone-related issues.
   - When displaying dates to users, convert UTC dates to the user's local timezone using the `toLocaleString()` method.
   - Consider using libraries like `moment-timezone` or the Intl.DateTimeFormat options with the `timeZone` property to manage timezones more precisely.

2. **Explain the concept of UTC in date handling and when you should use it.**

   UTC, or Coordinated Universal Time, is a time standard that serves as the reference point for timekeeping worldwide. It is not affected by timezones or daylight saving time. In date handling, you should use UTC when:

   - Ensuring consistency: Storing and working with dates in UTC ensures that you have a consistent reference point regardless of where your users are located.
   - Data exchange: When transmitting or receiving date-related data between systems, it's a good practice to use UTC to avoid timezone issues.
   - Internationalization: When displaying dates to users, convert UTC dates to their local timezones using the `Intl.DateTimeFormat` object to accommodate different locales.

3. **Can you parse a date from a user-provided string? How do you ensure robust parsing?**

   Yes, you can parse a date from a user-provided string using the `Date.parse()` method or the `new Date(string)` constructor. To ensure robust parsing:

   - Be aware of the potential variations in date formats and be prepared to handle different formats.
   - Validate the user input before parsing to prevent unexpected results.
   - Consider using a library like `date-fns` or `moment.js` for more robust and flexible date parsing.

4. **What is the purpose of the `Intl.DateTimeFormat` object in JavaScript, and how would you use it to format dates?**

   The `Intl.DateTimeFormat` object is used for internationalization (i18n) and formatting dates and times in a locale-aware manner. It allows you to format dates and times based on the user's chosen locale. Here's how to use it to format dates:

   ```javascript
   const options = { year: 'numeric', month: 'long', day: 'numeric' };
   const locale = 'en-US';
   const formatter = new Intl.DateTimeFormat(locale, options);
   const formattedDate = formatter.format(new Date()); // Formats the current date according to the specified locale and options.
   ```

   You can customize the formatting by adjusting the `options` object to include various date and time components, such as year, month, day, hour, minute, etc.

5. **Can you describe a scenario where you had to perform complex date arithmetic in your projects?**

   Sure, an example of complex date arithmetic might be calculating business days between two dates, considering weekends and holidays. You would need to:

   - Create a function that takes two dates as input.
   - Calculate the total days between the two dates.
   - Exclude weekends (typically Saturday and Sunday) and specified holidays from the count.
   - Handle edge cases like weekends at the beginning or end of the date range.

   This scenario requires a deep understanding of JavaScript's `Date` object and custom logic for working with dates.

6. **What are the potential pitfalls when working with dates in JavaScript, and how would you mitigate them for better performance?**

   Common pitfalls when working with dates in JavaScript include:

   - Timezone issues: Always work with UTC when storing and transmitting dates, and convert to the local timezone for display.
   - Parsing inconsistencies: Be cautious of different date formats and validate user input.
   - Performance bottlenecks: Date operations can be resource-intensive. Mitigate this by optimizing your code and using efficient algorithms for date calculations. For frequent date operations, consider using external date libraries like `date-fns` or `luxon` for better performance and consistency.

By understanding and addressing these challenges, you can work effectively with dates in JavaScript and ensure that your applications perform well in various scenarios.
*/
