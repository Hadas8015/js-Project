# HadaSpace — פרויקט חלל

תיאור קצר  
פרויקט אתר סטטי המכיל דפי בית, כניסה/הרשמה, הזמנת כרטיסים, אביזרים, אוכל וסל קניות. הקבצים הראשיים בתיקייה מצויים ברשימה למטה.

הפעלת הפרויקט (מהירה)
- לפתיחה מהירה: פתח [home.html](home.html) בדפדפן.
- מומלץ להריץ שרת סטטי (Live Server ב‑VSCode או Python):
  - Python 3: 
    ```sh
    python -m http.server 8000
    ```
  - ואז פתח http://localhost:8000/home.html

קבצים ותיאור קצר
- דפי HTML:
  - [home.html](http://_vscodecontentref_/0) — דף הבית
  - [login.html](http://_vscodecontentref_/1) — דף כניסה/הרשמה
  - [SignUp.html](http://_vscodecontentref_/2) — דף הרשמה (מראה דומה/הפוך)
  - [OrderTickets.html](http://_vscodecontentref_/3) — הזמנת כרטיסים
  - [Accessories.html](http://_vscodecontentref_/4) — אביזרים
  - [Food.html](http://_vscodecontentref_/5) — אוכל
  - [ShoppingCart.html](http://_vscodecontentref_/6) — סל קניות
  - [setting.html](http://_vscodecontentref_/7) — הגדרות

- קבצי CSS:
  - [menu.css](http://_vscodecontentref_/8) — תפריט עליון משותף
  - [home.css](http://_vscodecontentref_/9) — סגנון דף הבית
  - [login.css](http://_vscodecontentref_/10) — סגנון דף כניסה/הרשמה
  - [SignUp.css](http://_vscodecontentref_/11) — סגנון עמוד הרשמה (שקול)
  - [OrderTickets.css](http://_vscodecontentref_/12)
  - [Accessories.css](http://_vscodecontentref_/13)
  - [Food.css](http://_vscodecontentref_/14)
  - [ShoppingCart.css](http://_vscodecontentref_/15)
  - [setting.css](http://_vscodecontentref_/16)
  - [index.css](http://_vscodecontentref_/17)

- קבצי JavaScript:
  - [home.js](http://_vscodecontentref_/18) — קרוסלת תמונות ודפי ניווט. פונקציות/משתנים חשובים:
    - [imageArr](http://_vscodecontentref_/19) — מערך התמונות
    - [currentIndex](http://_vscodecontentref_/20) — אינדקס נוכחי
    - [updateImage](http://_vscodecontentref_/21) — מעדכן את התמונה
    - [nextImage](http://_vscodecontentref_/22) — תמונה הבאה
    - [prevImage](http://_vscodecontentref_/23) — תמונה קודמת
    - [AstronautsWords](http://_vscodecontentref_/24) — אלמנט התמונה בדף
  - [login.js](http://_vscodecontentref_/25) — אנימציות שדה וטיפול בכפתורים. משתנים/סלוטים:
    - [inputs](http://_vscodecontentref_/26) — בחירת input-ים ומעגל אנימציה
    - [buttons](http://_vscodecontentref_/27) — כפתורי החלפת טפסים
    - [form_container](http://_vscodecontentref_/28) — מיכל הטפסים
  - [SignUp.js](http://_vscodecontentref_/29) — אותו קוד כמו [login.js](http://_vscodecontentref_/30) (שימוש חוזר באותה לוגיקה)

- תיקיית תמונות:
  - [pictures](http://_vscodecontentref_/31) — כל התמונות והאייקונים של האתר

נקודות לשיפור / התראה
- יש כפילויות בין [login.js](http://_vscodecontentref_/32) ו‑SignUp.js — ניתן לאחד לקובץ משותף.
- כמה תמונות וקבצי CSS משתמשים בשם קבצים בעברית בתמונות; ודא שהנתיבים תקינים בסביבה שבה מריצים את האתר.
- פתיחת הקבצים בדפדפן ישירות עובדת, אך בהרצה דרך שרת סטטי תמנע בעיות CORS כאשר תוסיף משאבים נוספים.

אם תרצה, אני יכול:
- לאחד את קוד ה‑JS הכפול לקובץ משותף ולשדרג שמות משתנים.
- להוסיף דף README באנגלית.
