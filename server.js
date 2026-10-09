const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// تفعيل قراءة ملفات التصميم من مجلد views
app.use(express.static(path.join(__dirname, 'views')));

// مسار رئيسي يعرض ملف index من مجلد views (أو افتراضي)
app.get('/', (req, res) => {
    res.render('index'); // تأكد أن لديك ملف index.ejs داخل مجلد views، أو استبدله بالصفحة المطلوبة
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
