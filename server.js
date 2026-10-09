const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// تفعيل قراءة الـ JSON وإرسال البيانات
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// تفعيل مجلد الملفات الثابتة (للاستايلات والصور)
app.use(express.static(path.join(__dirname, 'views')));

// المسار الرئيسي للوحة التحكم
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
