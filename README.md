# react-navbar - شريط تنقل محسن (Enhanced Navbar)

هذا المشروع هو شريط تنقل مرن وقابل للتخصيص مبني باستخدام React و Tailwind CSS، وقد تم تحسينه الآن بدمج **Radix UI** لضمان أعلى مستويات الوصولية (Accessibility) وإضافة ميزات متقدمة.

## 🚀 الميزات الجديدة

*   **الوصولية المحسّنة (A11Y):** استخدام بدائيات Radix UI لضمان إدارة التركيز والتنقل بلوحة المفاتيح الصحيحة.
*   **قائمة الهاتف المحمول (Mobile Menu):** تم إعادة بنائها باستخدام `Radix Dialog` لتجربة مستخدم ووصولية أفضل.
*   **قائمة ملف تعريف المستخدم (User Dropdown):** مكون اختياري (`NavbarUser`) يوفر قائمة منسدلة متكاملة الوصولية.
*   **شريط البحث المتقدم (Command Palette):** مكون اختياري (`NavbarSearch`) يوفر واجهة بحث على نمط لوحة الأوامر (Command Palette).
*   **نظام CLI مطور:** دعم تثبيت المكونات الاختيارية عبر سطر الأوامر.

## 🛠️ التثبيت

### 1. تثبيت الحزمة (قريباً)

```bash
npm install @b7r/react-navbar
```

### 2. تثبيت المكونات عبر CLI

استخدم الأمر التالي لتثبيت المكونات الأساسية في مشروعك.

```bash
npx add-navbar --dir components/ui/navbar
```

#### تثبيت الميزات الاختيارية

يمكنك الآن تثبيت الميزات المتقدمة باستخدام الخيارات التالية:

| الخيار | الوصف | التبعيات المطلوبة |
| :--- | :--- | :--- |
| `--with-user-dropdown` | لتضمين مكون `NavbarUser` (قائمة ملف تعريف المستخدم). | `@radix-ui/react-dropdown-menu` |
| `--with-search` | لتضمين مكون `NavbarSearch` (شريط البحث المتقدم). | `@radix-ui/react-dialog` |

**مثال على التثبيت الكامل:**

```bash
npx add-navbar --dir src/ui/navbar --with-user-dropdown --with-search
```

**ملاحظة:** سيقوم الـ CLI بتوجيهك لتثبيت تبعيات Radix UI المطلوبة بعد نسخ الملفات.

## 💡 الاستخدام

تم تبسيط استخدام المكونات الأساسية، وتم إضافة المكونات الجديدة.

```tsx
import { 
  Navbar, 
  NavbarLogo, 
  NavbarContent, 
  NavbarMobile // تم استبدال NavbarMenu في وضع الهاتف
} from '@your_dir/navbar';

// استيراد المكونات الاختيارية
import { NavbarUser, NavbarUserItem, NavbarUserSeparator } from '@your_dir/navbar-user';
import { NavbarSearch } from '@your_dir/navbar-search';

function App() {
  return (
    <Navbar variant="default" sticky>
      <NavbarContent>
        <NavbarLogo href="/">
          <span className="text-xl font-bold">My App</span>
        </NavbarLogo>
      </NavbarContent>

      <NavbarContent className="hidden md:flex">
        {/* الروابط الرئيسية */}
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
        
        {/* شريط البحث المتقدم */}
        <NavbarSearch placeholder="Search (Cmd+K)" />
        
        {/* قائمة ملف تعريف المستخدم */}
        <NavbarUser avatarUrl="/avatar.jpg" userName="Ali Zlabd">
          <NavbarUserItem>Profile</NavbarUserItem>
          <NavbarUserItem>Settings</NavbarUserItem>
          <NavbarUserSeparator />
          <NavbarUserItem>Logout</NavbarUserItem>
        </NavbarUser>
      </NavbarContent>

      {/* قائمة الهاتف المحمول (تظهر فقط على الشاشات الصغيرة) */}
      <NavbarMobile side="right">
        {/* محتوى القائمة في وضع الهاتف */}
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="/about">About</a>
      </NavbarMobile>
    </Navbar>
  );
}
```

## 🧩 المكونات

### Navbar

المكون الجذري الذي يغلف جميع عناصر شريط التنقل.

*   **Props:** `variant`, `sticky`, `className`.

### NavbarLogo

مكون شعار/علامة شريط التنقل.

*   **Props:** `href`, `className`, `children`.

### NavbarContent

حاوية لعناصر شريط التنقل.

*   **Props:** `className`, `children`.

### NavbarMobile (جديد)

يحل محل `NavbarTrigger` و `NavbarMenu` في وضع الهاتف المحمول، ويستخدم `Radix Dialog` لتجربة أفضل.

*   **Props:** `side` ('top' | 'right' | 'bottom' | 'left'), `children`.

### NavbarSearch (جديد)

مكون شريط البحث المتقدم (Command Palette).

*   **Props:** `placeholder`, `className`.

### NavbarUser (جديد)

مكون قائمة ملف تعريف المستخدم.

*   **Props:** `avatarUrl`, `userName`, `children`.

## ⚙️ بيئة التطوير

تم تحسين بيئة التطوير لضمان سير العمل بشكل سلس.

### تشغيل المشروع

1.  تثبيت التبعيات: `npm install`
2.  تشغيل وضع التطوير: `npm run dev`

## 📄 الترخيص

MIT
