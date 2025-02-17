var calendarObject = [
    [["۲۶", "16", "٠٥", false, [], true], ["۲۷", "17", "٠٦", false, [], true], ["۲۸", "18", "٠٧", false, [], true], ["۲۹", "19", "٠٨", true, [], true], ["۱", "20", "٠٩", true, ["جشن نوروز/جشن سال نو", "روز جهانی شادی[ 20 March ]"], false], ["۲", "21", "١٠", true, ["عیدنوروز", "روز جهانی نوروز[ 21 March ]"], false], ["۳", "22", "١١", true, ["عیدنوروز"], false], ["۴", "23", "١٢", true, ["عیدنوروز", "روز جهانی هواشناسی[ 23 March ]"], false], ["۵", "24", "١٣", false, [], false], ["۶", "25", "١٤", false, ["روز امید، روز شادباش نویسی", "زادروز اَشو زرتشت، اَبَراِنسان بزرگ تاریخ"], false], ["۷", "26", "١٥", false, ["ولادت امام حسن مجتبی علیه السلام[ ١٥ رمضان ]"], false], ["۸", "27", "١٦", false, ["روز جهانی تئاتر[ 27 March ]"], false], ["۹", "28", "١٧", false, [], false], ["۱۰", "29", "١٨", true, ["جشن آبانگاه", "شب قدر[ ١٨ رمضان ]"], false], ["۱۱", "30", "١٩", false, ["ضربت خوردن حضرت علی علیه السلام[ ١٩ رمضان ]"], false], ["۱۲", "31", "٢٠", true, ["روز جمهوری اسلامی"], false], ["۱۳", "01", "٢١", true, ["جشن سیزده به در", "شهادت حضرت علی علیه السلام[ ٢١ رمضان ]"], false], ["۱۴", "02", "٢٢", false, ["شب قدر[ ٢٢ رمضان ]"], false], ["۱۵", "03", "٢٣", false, [], false], ["۱۶", "04", "٢٤", false, [], false], ["۱۷", "05", "٢٥", true, ["سروش روز،جشن سروشگان"], false], ["۱۸", "06", "٢٦", false, [], false], ["۱۹", "07", "٢٧", false, ["روز جهانی بهداشت[ 7 April ]", "فروردین روز،جشن فروردینگان"], false], ["۲۰", "08", "٢٨", false, [], false], ["۲۱", "09", "٢٩", false, [], false], ["۲۲", "10", "٠١", true, ["عید سعید فطر[ ١ شوال ]"], false], ["۲۳", "11", "٠٢", true, ["تعطیل به مناسبت عید سعید فطر[ ٢ شوال ]", "روز دندانپزشک"], false], ["۲۴", "12", "٠٣", true, [], false], ["۲۵", "13", "٠٤", false, ["روز بزرگداشت عطار نیشابوری"], false], ["۲۶", "14", "٠٥", false, [], false], ["۲۷", "15", "٠٦", false, [], false], ["۲۸", "16", "٠٧", false, [], false], ["۲۹", "17", "٠٨", false, ["روز ارتش جمهوری اسلامی ایران"], false], ["۳۰", "18", "٠٩", false, ["روز علوم آزمایشگاهی، زاد روز حکیم سید اسماعیل جرجانی"], false], ["۳۱", "19", "١٠", true, [], false]],
    [["۱","20","١١",false,["روز بزرگداشت سعدی"],false],["۲","21","١٢",false,[],false],["۳","22","١٣",false,["جشن گیاه آوری؛ روز زمین[ 22 April ]","روزبزرگداشت شیخ بهایی؛ روزملی کارآفرینی؛ روز معماری"],false],["۴","23","١٤",false,[],false],["۵","24","١٥",false,[],false],["۶","25","١٦",false,[],false],["۷","26","١٧",true,[],false],["۸","27","١٨",false,["روز جهانی طراحی و گرافیک[ 27 April ]"],false],["۹","28","١٩",false,["روز ملی روانشناس و مشاور"],false],["۱۰","29","٢٠",false,["جشن چهلم نوروز؛ روز ملی خلیج فارس"],false],["۱۱","30","٢١",false,[],false],["۱۲","01","٢٢",false,["روز معلم","روزجهانیکارگر[ 1 May ]"],false],["۱۳","02","٢٣",false,[],false],["۱۴","03","٢٤",true,[],false],["۱۵","04","٢٥",true,["جشن میانه بهار/جشن بهاربد؛ روز شیراز","شهادت امام جعفر صادق علیه السلام[ ٢٥ شوال ]"],false],["۱۶","05","٢٦",false,["روز جهانی ماما[ 5 May ]"],false],["۱۷","06","٢٧",false,[],false],["۱۸","07","٢٨",false,[],false],["۱۹","08","٢٩",false,["روز جهانی صلیب سرخ و هلال احمر[ 8 May ]"],false],["۲۰","09","٣٠",false,[],false],["۲۱","10","٠١",true,["ولادت حضرت معصومه سلام الله علیها و روز دختران[ ١ ذوالقعده ]"],false],["۲۲","11","٠٢",false,["زادروز مریم میرزاخانی ریاضیدان ایرانی، روز جهانی زن در ریاضیات"],false],["۲۳","12","٠٣",false,[],false],["۲۴","13","٠٤",false,[],false],["۲۵","14","٠٥",false,["روز بزرگداشت فردوسی"],false],["۲۶","15","٠٦",false,[],false],["۲۷","16","٠٧",false,["روز ارتباطات و روابط عمومی"],false],["۲۸","17","٠٨",true,["روز بزرگداشت حکیم عمر خیام"],false],["۲۹","18","٠٩",false,["روز جهانی موزه و میراث فرهنگی[ 18 May ]"],false],["۳۰","19","١٠",false,[],false],["۳۱","20","١١",false,["ولادت امامرضا علیه السلام[ ١١ ذوالقعده ]"],false],["۱","21","١٢",false,[],true],["۲","22","١٣",false,[],true],["۳","23","١٤",false,[],true],["۴","24","١٥",true,[],true]],
    [["۲۹","18","٠٩",false,[],true],["۳۰","19","١٠",false,[],true],["۳۱","20","١١",false,[],true],["۱","21","١٢",false,["روز بهره وری و بهینه سازی مصرف","روز بزرگداشت ملاصدرا"],false],["۲","22","١٣",false,["فروریختن ساختمان متروپل در آبادان"],false],["۳","23","١٤",false,["فتح خرمشهر در عملیات بیت المقدس و روز مقاومت، ایثار و پیروزی"],false],["۴","24","١٥",true,["روز دزفول، روز مقاومت و پایداری"],false],["۵","25","١٦",false,[],false],["۶","26","١٧",false,["خرداد روز،جشن خردادگان"],false],["۷","27","١٨",false,[],false],["۸","28","١٩",false,[],false],["۹","29","٢٠",false,[],false],["۱۰","30","٢١",false,[],false],["۱۱","31","٢٢",true,["روز جهانی بدون دخانیات[ 31 May ]"],false],["۱۲","01","٢٣",false,[],false],["۱۳","02","٢٤",false,[],false],["۱۴","03","٢٥",true,["رحلت حضرت امام خمینی"],false],["۱۵","04","٢٦",true,["قیام 15 خرداد"],false],["۱۶","05","٢٧",false,["روز جهانی محیط زیست[ 5 June ]"],false],["۱۷","06","٢٨",false,[],false],["۱۸","07","٢٩",true,["شهادت امام محمد تقی علیه السلام[ ٢٩ ذوالقعده ]"],false],["۱۹","08","٠١",false,[],false],["۲۰","09","٠٢",false,[],false],["۲۱","10","٠٣",false,["روز جهانی صنایع دستی[ 10 June ]"],false],["۲۲","11","٠٤",false,[],false],["۲۳","12","٠٥",false,["روز جهانی مبارزه با کار کودکان[ 12 June ]"],false],["۲۴","13","٠٦",false,[],false],["۲۵","14","٠٧",true,["روز ملی گل وگیاه","شهادت امام محمد باقر علیه السلام[ ٧ ذوالحجه ]","روز جهانی اهدای خون[ 14 June ]"],false],["۲۶","15","٠٨",false,[],false],["۲۷","16","٠٩",false,["روز عرفه[ ٩ ذوالحجه ]"],false],["۲۸","17","١٠",true,["روز جهانی بیابان زدایی[ 17 June ]","عید سعید قربان[ ١٠ ذوالحجه ]"],false],["۲۹","18","١١",false,["روز جهانی پدر[ 18 June ]"],false],["۳۰","19","١٢",false,[],false],["۳۱","20","١٣",false,["سالروز زلزله رودبار و منجیل [1369خورشیدی]"],false],["۱","21","١٤",true,[],true]],
    [["۲۶","15","٠٨",false,[],true],["۲۷","16","٠٩",false,[],true],["۲۸","17","١٠",true,[],true],["۲۹","18","١١",false,[],true],["۳۰","19","١٢",false,[],true],["۳۱","20","١٣",false,[],true],["۱","21","١٤",true,["جشن آب پاشونک، جشن آغاز تابستان"],false],["۲","22","١٥",false,["ولادت امام علی النقی الهادی علیه السلام[ ١٥ ذوالحجه ]"],false],["۳","23","١٦",false,[],false],["۴","24","١٧",false,[],false],["۵","25","١٨",true,["عید سعید غدیر خم[ ١٨ ذوالحجه ]"],false],["۶","26","١٩",false,["روز جهانی مبارزه با مواد مخدر[ 26 June ]"],false],["۷","27","٢٠",false,["انفجار دفتر حزب جمهوری اسلامی و شهادت دکتر بهشتی و 72 نفر از اعضای حزب؛ روز قوه قضاییه","ولادت امام موسی کاظم علیه السلام[ ٢٠ ذوالحجه ]"],false],["۸","28","٢١",true,["روز مبارزه با سلاح های شیمیایی و میکروبی"],false],["۹","29","٢٢",false,[],false],["۱۰","30","٢٣",false,["روز صنعت و معدن","زادروز بابک خرمدین، سپه‌سالار دلاور ایران"],false],["۱۱","01","٢٤",false,[],false],["۱۲","02","٢٥",false,["شلیک به پرواز 655 ایران ایر توسط ناو وینسنس [ 1367 خورشیدی ]"],false],["۱۳","03","٢٦",false,["جشن تیرگان، بزرگداشت کمان کشیدن جان‌فدای ایران، آرش کمانگیر بر فراز البرز"],false],["۱۴","04","٢٧",false,["روز قلم"],false],["۱۵","05","٢٨",true,["جشن خام خواری"],false],["۱۶","06","٢٩",false,[],false],["۱۷","07","٠١",false,[],false],["۱۸","08","٠٢",false,[],false],["۱۹","09","٠٣",false,[],false],["۲۰","10","٠٤",false,[],false],["۲۱","11","٠٥",false,[],false],["۲۲","12","٠٦",true,["زادروز محمد خوارزمی، ریاضیدان و فیلسوف ایرانی و روز ملی فناوری اطلاعات"],false],["۲۳","13","٠٧",false,[],false],["۲۴","14","٠٨",false,[],false],["۲۵","15","٠٩",true,["روز بهزیستی و تامین اجتماعی","تاسوعای حسینی[ ٩ محرم ]"],false],["۲۶","16","١٠",true,["عاشورای حسینی[ ١٠ محرم ]"],false],["۲۷","17","١١",false,["اعلام پذیرش قطعنامه 598 شورای امنیت از سوی ایران [ 1367 خورشیدی ]"],false],["۲۸","18","١٢",false,["شهادتامام زین العابدین علیه السلام[ ١٢ محرم ]"],false],["۲۹","19","١٣",true,[],false],["۳۰","20","١٤",false,[],false],["۳۱","21","١٥",false,[],false],["۱","22","١٦",false,[],true],["۲","23","١٧",false,[],true],["۳","24","١٨",false,[],true],["۴","25","١٩",false,[],true],["۵","26","٢٠",true,[],true]],
    [["۳۰","20","١٤",false,[],true],["۳۱","21","١٥",false,[],true],["۱","22","١٦",false,[],false],["۲","23","١٧",false,[],false],["۳","24","١٨",false,[],false],["۴","25","١٩",false,[],false],["۵","26","٢٠",true,[],false],["۶","27","٢١",false,[],false],["۷","28","٢٢",false,["اَمرداد روز،جشن اَمردادگان"],false],["۸","29","٢٣",false,["روز بزرگداشت شیخ شهاب الدین سهروردی"],false],["۹","30","٢٤",false,[],false],["۱۰","31","٢٥",false,["جشن چله تابستان"],false],["۱۱","01","٢٦",false,["آغاز هفته جهانی شیردهی[ 1 August ]"],false],["۱۲","02","٢٧",true,[],false],["۱۳","03","٢٨",false,[],false],["۱۴","04","٢٩",false,["صدور فرمان مشروطیت"],false],["۱۵","05","٣٠",false,[],false],["۱۶","06","٠١",false,[],false],["۱۷","07","٠٢",false,["روز خبرنگار"],false],["۱۸","08","٠٣",false,[],false],["۱۹","09","٠٤",true,[],false],["۲۰","10","٠٥",false,[],false],["۲۱","11","٠٦",false,[],false],["۲۲","12","٠٧",false,[],false],["۲۳","13","٠٨",false,["روز جهانی چپ دست ها[ 13 August ]"],false],["۲۴","14","٠٩",false,[],false],["۲۵","15","١٠",false,[],false],["۲۶","16","١١",true,[],false],["۲۷","17","١٢",false,[],false],["۲۸","18","١٣",false,["سالروز وقایع 28 مرداد پس از برکناری محمد مصدق‌السلطنه","سالروز فاجعه آتش زدن سینما رکس آبادان"],false],["۲۹","19","١٤",false,["روز جهانی عکاسی[ 19 August ]"],false],["۳۰","20","١٥",false,[],false],["۳۱","21","١٦",false,[],false],["۱","22","١٧",false,[],true],["۲","23","١٨",true,[],true]],
    [["۲۷","17","١٢",false,[],true],["۲۸","18","١٣",false,[],true],["۲۹","19","١٤",false,[],true],["۳۰","20","١٥",false,[],true],["۳۱","21","١٦",false,[],true],["۱","22","١٧",false,["روز بزرگداشت ابوعلی سینا و روز پزشک"],false],["۲","23","١٨",true,["آغاز هفته دولت"],false],["۳","24","١٩",false,[],false],["۴","25","٢٠",true,["زادروز کوروش بزرگ","شهریور روز،جشن شهریورگان","اربعین حسینی[ ٢٠ صفر ]"],false],["۵","26","٢١",false,["روز بزرگداشت محمدبن زکریای رازی و روز داروساز"],false],["۶","27","٢٢",false,[],false],["۷","28","٢٣",false,[],false],["۸","29","٢٤",false,["انفجار در دفتر نخست‌وزیری جمهوری اسلامی ایران، روز مبارزه با تروریسم"],false],["۹","30","٢٥",true,[],false],["۱۰","31","٢٦",false,[],false],["۱۱","01","٢٧",false,["روزصنعت چاپ"],false],["۱۲","02","٢٨",true,["رحلترسول اکرم؛شهادت امام حسن مجتبی علیه السلام[ ٢٨ صفر ]","سالروز شهادت رئیسعلی دلواری، سردار بزرگ میهن و فرمانده قیام جنوب علیه اشغالگران انگلیسی"],false],["۱۳","03","٢٩",false,["روز بزرگداشت ابوریحان بیرونی"],false],["۱۴","04","٣٠",true,["شهادت امام رضا علیه السلام[ ٣٠ صفر ]"],false],["۱۵","05","٠١",false,["هجرت پیامبر اکرم از مکه به مدینه[ ١ ربيع الاول ]"],false],["۱۶","06","٠٢",true,[],false],["۱۷","07","٠٣",false,[],false],["۱۸","08","٠٤",false,[],false],["۱۹","09","٠٥",false,[],false],["۲۰","10","٠٦",false,["روز جهانی پیشگیری از خودکشی[ 10 September ]"],false],["۲۱","11","٠٧",false,["روز سینما","حمله به برج‌های دوقلوی مرکز تجارت جهانی[ 11 September ]"],false],["۲۲","12","٠٨",true,["شهادت امام حسن عسکری علیه السلام[ ٨ ربيع الاول ]","روز گرامیداشت برنامه نویسان[ 12 September ]"],false],["۲۳","13","٠٩",true,[],false],["۲۴","14","١٠",false,[],false],["۲۵","15","١١",false,[],false],["۲۶","16","١٢",false,["میلاد رسول اکرم به روایت اهل سنت[ ١٢ ربيع الاول ]"],false],["۲۷","17","١٣",false,["روز شعر و ادب پارسی وروز بزرگداشت استاد شهریار"],false],["۲۸","18","١٤",false,[],false],["۲۹","19","١٥",false,[],false],["۳۰","20","١٦",true,[],false],["۳۱","21","١٧",true,["آغاز هفته دفاع مقدس","میلاد رسول اکرم و امام جعفر صادق علیه السلام[ ١٧ ربيع الاول ]","روز جهانی صلح[ 21 September ]"],false],["۱","22","١٨",false,[],true],["۲","23","١٩",false,[],true],["۳","24","٢٠",false,[],true],["۴","25","٢١",false,[],true],["۵","26","٢٢",false,[],true],["۶","27","٢٣",true,[],true]],
    [["۳۱","21","١٧",true,[],true],["۱","22","١٨",false,["آغاز حمله مغول به ایران در پاییز 598 خورشیدی"],false],["۲","23","١٩",false,[],false],["۳","24","٢٠",false,[],false],["۴","25","٢١",false,[],false],["۵","26","٢٢",false,[],false],["۶","27","٢٣",true,["روز جهانی جهانگردی[ 27 September ]"],false],["۷","28","٢٤",false,["روز آتش نشانی و ایمنی","سقوط هواپیمای حامل جمعی از فرماندهان جنگ (کلاهدوز، نامجو، فلاحی، فکوری، جهان آرا) در سال 1360","روز بزرگداشت شمس تبریزی"],false],["۸","29","٢٥",false,["روزبزرگداشت مولوی"],false],["۹","30","٢٦",false,["روز جهانی ناشنوایان[ 30 September ]","روز جهانی ترجمه و مترجم[ 30 September ]"],false],["۱۰","01","٢٧",false,["مهر روز،جشن مهرگان","روز جهانی سالمندان[ 1 October ]"],false],["۱۱","02","٢٨",false,[],false],["۱۲","03","٢٩",false,[],false],["۱۳","04","٣٠",true,["آغاز هفته جهانی فضا[ 4 October ]"],false],["۱۴","05","٠١",false,["روز دامپزشکی","روز جهانی معلم[ 5 October ]"],false],["۱۵","06","٠٢",false,[],false],["۱۶","07","٠٣",false,["روز ملی کودک"],false],["۱۷","08","٠٤",false,[],false],["۱۸","09","٠٥",false,["روز جهانی پست[ 9 October ]"],false],["۱۹","10","٠٦",false,["روز جهانی مبارزه با حکم اعدام[ 10 October ]"],false],["۲۰","11","٠٧",true,["روز بزرگداشت حافظ","روز جهانی دختر[ 11 October ]"],false],["۲۱","12","٠٨",false,["روز پیروزی کاوه و فریدون بر ضحاک","ولادت امام حسن عسکری علیه السلام[ ٨ ربيع الثاني ]"],false],["۲۲","13","٠٩",false,[],false],["۲۳","14","١٠",false,["روز جهانی استاندارد[ 14 October ]","وفات حضرت معصومه سلام الله علیها[ ١٠ ربيع الثاني ]"],false],["۲۴","15","١١",false,["روز جهانی عصای سفید[ 15 October ]"],false],["۲۵","16","١٢",false,["روز جهانی غذا[ 16 October ]"],false],["۲۶","17","١٣",false,["روز تربیت بدنی و ورزش","روز جهانی ریشه کنی فقر[ 17 October ]"],false],["۲۷","18","١٤",true,[],false],["۲۸","19","١٥",false,["زادروز ستارخان ملقب به سردار ملی و از سرداران جنبش مشروطه ایران"],false],["۲۹","20","١٦",false,["روز ملی کوهنورد"],false],["۳۰","21","١٧",false,[],false],["۱","22","١٨",false,[],true],["۲","23","١٩",false,[],true],["۳","24","٢٠",false,[],true],["۴","25","٢١",true,[],true]],
    [["۲۸","19","١٥",false,[],true],["۲۹","20","١٦",false,[],true],["۳۰","21","١٧",false,[],true],["۱","22","١٨",false,["روز آمار و برنامه ریزی","روز بزرگداشت ابوالفضل بیهقی، تاریخ‌نگار و نویسنده ایرانی"],false],["۲","23","١٩",false,[],false],["۳","24","٢٠",false,[],false],["۴","25","٢١",true,[],false],["۵","26","٢٢",false,[],false],["۶","27","٢٣",false,[],false],["۷","28","٢٤",false,["سالروز ورود کوروش بزرگ به بابل در سال 539 پیش از میلاد"],false],["۸","29","٢٥",false,[],false],["۹","30","٢٦",false,[],false],["۱۰","31","٢٧",false,["آبان روز، جشن آبانگان"],false],["۱۱","01","٢٨",true,[],false],["۱۲","02","٢٩",false,[],false],["۱۳","03","٠١",false,["روز دانش آموز"],false],["۱۴","04","٠٢",false,["روز ملّی مازندران"],false],["۱۵","05","٠٣",false,["جشن میانه پاییز"],false],["۱۶","06","٠٤",false,[],false],["۱۷","07","٠٥",false,["ولادت حضرت زینب سلام الله علیها و روز پرستار و بهورز[ ٥ جمادي الاولي ]"],false],["۱۸","08","٠٦",true,["روز ملی کیفیت"],false],["۱۹","09","٠٧",false,[],false],["۲۰","10","٠٨",false,[],false],["۲۱","11","٠٩",false,[],false],["۲۲","12","١٠",false,[],false],["۲۳","13","١١",false,[],false],["۲۴","14","١٢",false,["روز کتاب و کتابخوانی","روز جهانی دیابت[ 14 November ]"],false],["۲۵","15","١٣",true,[],false],["۲۶","16","١٤",false,[],false],["۲۷","17","١٥",false,[],false],["۲۸","18","١٦",false,[],false],["۲۹","19","١٧",false,["روز جهانی آقایان[ 19 November ]"],false],["۳۰","20","١٨",false,["روز جهانی کودک[ 20 November ]"],false],["۱","21","١٩",false,[],true],["۲","22","٢٠",true,[],true]],
    [["۲۶","16","١٤",false,[],true],["۲۷","17","١٥",false,[],true],["۲۸","18","١٦",false,[],true],["۲۹","19","١٧",false,[],true],["۳۰","20","١٨",false,[],true],["۱","21","١٩",false,["آذر جشن","روز جهانی فلسفه[ 21 November ]"],false],["۲","22","٢٠",true,[],false],["۳","23","٢١",false,[],false],["۴","24","٢٢",false,[],false],["۵","25","٢٣",false,["روز بسیج مستضعفان","روز جهانی مبارزه با خشونت علیه زنان[ 25 November ]"],false],["۶","26","٢٤",false,[],false],["۷","27","٢٥",false,["سالروز عملیات مروارید و روز نیروی دریایی"],false],["۸","28","٢٦",false,[],false],["۹","29","٢٧",true,["جشن آذرگان ،آذر روز"],false],["۱۰","30","٢٨",false,[],false],["۱۱","01","٢٩",false,["روز جهانی ایدز[ 1 December ]"],false],["۱۲","02","٣٠",false,[],false],["۱۳","03","٠١",false,["روز بیمه","روز جهانی معلولان[ 3 December ]"],false],["۱۴","04","٠٢",false,[],false],["۱۵","05","٠٣",true,["شهادت حضرت فاطمه زهرا سلام الله علیها[ ٣ جمادي الثانيه ]","روز حسابدار"],false],["۱۶","06","٠٤",true,["روز دانشجو"],false],["۱۷","07","٠٥",false,[],false],["۱۸","08","٠٦",false,[],false],["۱۹","09","٠٧",false,[],false],["۲۰","10","٠٨",false,["روز جهانی حقوق بشر[ 10 December ]"],false],["۲۱","11","٠٩",false,["روز جهانی کوهستان[ 11 December ]","سالروز نجات آذربایجان"],false],["۲۲","12","١٠",false,[],false],["۲۳","13","١١",true,[],false],["۲۴","14","١٢",false,[],false],["۲۵","15","١٣",false,["روز پژوهش و فنآوری"],false],["۲۶","16","١٤",false,[],false],["۲۷","17","١٥",false,[],false],["۲۸","18","١٦",false,[],false],["۲۹","19","١٧",false,[],false],["۳۰","20","١٨",true,["جشن شب یلدا"],false]],
    [["۱","21","١٩",false,["روز میلاد خورشید؛ جشن خرم روز، نخستین جشن دیگان"],false],["۲","22","٢٠",false,["ولادت حضرت فاطمه زهرا سلام الله علیها و روز مادر[ ٢٠ جمادي الثانيه ]"],false],["۳","23","٢١",false,[],false],["۴","24","٢٢",false,[],false],["۵","25","٢٣",false,["زمین لرزه ی بم [1382 خورشیدی]","جشن کریسمس[ 25 December ]","سالروز شهادت اَشو زرتشت، اَبَراِنسان بزرگ تاریخ","روز بزرگداشت دوستی[ 25 December ]","سالروز عملیات کربلای 4 [1365 خورشیدی]"],false],["۶","26","٢٤",false,[],false],["۷","27","٢٥",true,[],false],["۸","28","٢٦",false,["دی به آذر روز، دومین جشن دیگان","روز بزرگداشت یعقوب لیث صفاری (رادمان پورماهک) نخستین پادشاه ایرانی پس از اسلام"],false],["۹","29","٢٧",false,["اعدام میهن‌پرستان آذری در تبریز توسط قوای اشغالگر روس [1290 خورشیدی]"],false],["۱۰","30","٢٨",false,[],false],["۱۱","31","٢٩",false,[],false],["۱۲","01","٣٠",false,["جشن آغاز سال نو میلادی[ 1 January ]"],false],["۱۳","02","٠١",false,["ولادتامام محمد باقر علیه السلام[ ١ رجب ]","شهادت سردار حاج قاسم سلیمانی [1398 خورشیدی]"],false],["۱۴","03","٠٢",true,[],false],["۱۵","04","٠٣",false,["دی به مهر روز، سومین جشن دیگان","شهادت امام علی النقی الهادی علیه السلام[ ٣ رجب ]"],false],["۱۶","05","٠٤",false,["غرق شدن کشتی سانچی [1396 خورشیدی]"],false],["۱۷","06","٠٥",false,[],false],["۱۸","07","٠٦",false,["شلیک به پرواز 752 هواپیمایی اوکراین [1398 خورشیدی]"],false],["۱۹","08","٠٧",false,["درگذشت اکبر هاشمی رفسنجانی [1395 خورشیدی]"],false],["۲۰","09","٠٨",false,["قتل امیرکبیر به دستور ناصرالدین شاه قاجار [1230 خورشیدی]"],false],["۲۱","10","٠٩",true,[],false],["۲۲","11","١٠",false,["ولادت امام محمد تقی علیه السلام[ ١٠ رجب ]"],false],["۲۳","12","١١",false,["دی به دین روز، چهارمین جشن دیگان"],false],["۲۴","13","١٢",false,[],false],["۲۵","14","١٣",true,["ولادت امام علی علیه السلام و روز پدر[ ١٣ رجب ]"],false],["۲۶","15","١٤",false,[],false],["۲۷","16","١٥",false,["وفات حضرت زینب سلام الله علیها[ ١٥ رجب ]"],false],["۲۸","17","١٦",true,[],false],["۲۹","18","١٧",false,[],false],["۳۰","19","١٨",false,["آتش‌سوزی و فروریختن ساختمان پلاسکو [1395 خورشیدی]"],false],["۱","20","١٩",false,[],true],["۲","21","٢٠",false,[],true],["۳","22","٢١",false,[],true],["۴","23","٢٢",false,[],true],["۵","24","٢٣",true,[],true]],
    [["۲۹","18","١٧",false,[],true],["۳۰","19","١٨",false,[],true],["۱","20","١٩",false,["زادروز فردوسی"],false],["۲","21","٢٠",false,["بهمن روز، جشن بهمنگان"],false],["۳","22","٢١",false,[],false],["۴","23","٢٢",false,[],false],["۵","24","٢٣",true,["جشن نوسره"],false],["۶","25","٢٤",false,[],false],["۷","26","٢٥",false,["شهادت امام موسی کاظم علیه السلام[ ٢٥ رجب ]"],false],["۸","27","٢٦",false,[],false],["۹","28","٢٧",true,["مبعث رسول اکرم (ص)[ ٢٧ رجب ]"],false],["۱۰","29","٢٨",false,["جشن سده، گرامیداشتِ کشف آتش به دستِ هوشنگ شاه"],false],["۱۱","30","٢٩",false,[],false],["۱۲","31","٠١",true,["بازگشت امام خمینی (ره) به ایران"],false],["۱۳","01","٠٢",false,[],false],["۱۴","02","٠٣",false,["ولادت سالار شهیدان، امام حسین علیه السلام و روز پاسدار[ ٣ شعبان ]"],false],["۱۵","03","٠٤",false,["جشن میانه زمستان","ولادت ابوالفضل العباس علیه السلام و روز جانباز[ ٤ شعبان ]"],false],["۱۶","04","٠٥",false,["ولادت امام زین العابدین علیه السلام[ ٥ شعبان ]"],false],["۱۷","05","٠٦",false,[],false],["۱۸","06","٠٧",false,[],false],["۱۹","07","٠٨",true,["روز نیروی هوایی"],false],["۲۰","08","٠٩",false,[],false],["۲۱","09","١٠",false,[],false],["۲۲","10","١١",true,["پیروزی انقلاب اسلامی","ولادت علی اکبر علیه السلام و روز جوان[ ١١ شعبان ]"],false],["۲۳","11","١٢",false,["حمله به سفارت روسیه و قتل گریبایدوف سفیر روسیه تزاری در ایران[ 11 February ]"],false],["۲۴","12","١٣",false,[],false],["۲۵","13","١٤",false,[],false],["۲۶","14","١٥",true,["ولادت حضرت قائم عجل الله تعالی فرجه و جشن نیمه شعبان[ ١٥ شعبان ]","جشن ولنتاین[ 14 February ]"],false],["۲۷","15","١٦",false,[],false],["۲۸","16","١٧",false,[],false],["۲۹","17","١٨",false,["جشن سپندارمذگان و روز عشق","فاجعه انفجار قطار نیشابور [1382 خورشیدی]"],false],["۳۰","18","١٩",false,[],false],["۱","19","٢٠",false,[],true],["۲","20","٢١",false,[],true],["۳","21","٢٢",true,[],true]],
    [["۲۷","15","١٦",false,[],true],["۲۸","16","١٧",false,[],true],["۲۹","17","١٨",false,[],true],["۳۰","18","١٩",false,[],true],["۱","19","٢٠",false,[],false],["۲","20","٢١",false,[],false],["۳","21","٢٢",true,[],false],["۴","22","٢٣",false,[],false],["۵","23","٢٤",false,["روز بزرگداشت زن و زمین","روز بزرگداشت خواجه نصیر الدین طوسی و روز مهندس"],false],["۶","24","٢٥",false,[],false],["۷","25","٢٦",false,["سالروز استقلال کانون وکلای دادگستری و روز وکیل مدافع"],false],["۸","26","٢٧",false,[],false],["۹","27","٢٨",false,[],false],["۱۰","28","٢٩",true,[],false],["۱۱","01","٣٠",false,[],false],["۱۲","02","٠١",false,[],false],["۱۳","03","٠٢",false,[],false],["۱۴","04","٠٣",false,[],false],["۱۵","05","٠٤",false,["روز درختکاری"],false],["۱۶","06","٠٥",false,[],false],["۱۷","07","٠٦",true,[],false],["۱۸","08","٠٧",false,["روزجهانی زنان[ 8 March ]"],false],["۱۹","09","٠٨",false,[],false],["۲۰","10","٠٩",false,[],false],["۲۱","11","١٠",false,[],false],["۲۲","12","١١",false,[],false],["۲۳","13","١٢",false,[],false],["۲۴","14","١٣",true,["روز جهانی عدد پیπ[ 14 March ]"],false],["۲۵","15","١٤",false,["پایان سرایش شاهنامه","روز بزرگداشت اختر چرخ ادب، پروین اعتصامی"],false],["۲۶","16","١٥",false,["ولادت امام حسن مجتبی علیه السلام[ ١٥ رمضان ]"],false],["۲۷","17","١٦",false,[],false],["۲۸","18","١٧",false,["جشن چهارشنبه سوری"],false],["۲۹","19","١٨",true,["روز ملی شدن صنعت نفت ایران","شب قدر[ ١٨ رمضان ]"],false],["۳۰","20","١٩",true,["ضربت خوردن حضرت علی علیه السلام[ ١٩ رمضان ]","آخرین روز سال","روز جهانی شادی[ 20 March ]"],false],["۱","21","٢٠",true,[],true]]
];

const metaYear = {
    year: 1403,
    metaYear: [
        "March - April 2024 | رمضان - شوال - ١٤٤٥",
        "April - May 2024 | شوال - ذوالقعده - ١٤٤٥",
        "May - June 2024 | ذوالقعده - ذوالحجه - ١٤٤٥",
        "June - July 2024 | ذوالحجه - محرم - ١٤٤٥",
        "July - August 2024 | محرم - صفر - ١٤٤٦",
        "August - September 2024 | صفر - ربيع الاول - ١٤٤٦",
        "September - October 2024 | ربيع الاول - ربيع الثاني - ١٤٤٦",
        "October - November 2024 | ربيع الثاني - جمادي الاولي - ١٤٤٦",
        "November - December 2024 | جمادي الاولي - جمادي الثانيه - ١٤٤٦",
        "December 2024 - January 2025 | جمادي الثانيه - رجب - ١٤٤٦",
        "January - February 2025 | رجب - شعبان - ١٤٤٦",
        "February - March 2025 | شعبان - رمضان - ١٤٤٦",
    ]
}
//--------------------------------------------
const cssProperty = {

    "spring": [
        {
            selector: ".num-dates ul li:hover, .num-dates ul li:hover",
            property: [
                "background-color: #5e991a;",
                "color: white;",
            ]
        },

        {
            selector: ".active-season",
            property: [
                "background-color: #5e991a !important;",
                "color:white !important;",
                "background-image: url(static/img/spring.jpg);",
                "background-repeat: no-repeat;",
                "background-size: cover;",
            ]
        },

        {
            selector: ".active-season-cr, .month-hover:hover",
            property: [
                "color: #5e991a !important;"
            ]
        },

        {
            selector: ".holiday:hover, .active-season-bg",
            property: [
                "background-color: #5e991a !important;",
            ]
        },

        {
            selector: ".year-meta, .year",
            property: [
                "color: #5e991a;",
            ]
        }
    ],

    "summer": [
        {
            selector: ".num-dates ul li:hover, .num-dates ul li:hover",
            property: [
                "background-color: #4caf50 ;",
                "color: white;",
            ]
        },

        {
            selector: ".active-season",
            property: [
                "background-color: #4caf50  !important;",
                "color:white !important;",
                "background-image: url(static/img/summer.jpg);",
                "background-repeat: no-repeat;",
                "background-size: cover;",
            ]
        },

        {
            selector: ".active-season-cr, .month-hover:hover",
            property: [
                "color: #4caf50  !important;"
            ]
        },

        {
            selector: ".holiday:hover, .active-season-bg",
            property: [
                "background-color: #4caf50  !important;",
            ]
        },

        {
            selector: ".year-meta, .year",
            property: [
                "color: #4caf50 ;",
            ]
        }
    ],

    "fall": [
        {
            selector: ".num-dates ul li:hover, .num-dates ul li:hover",
            property: [
                "background-color: #ff9800;",
                "color: white;",
            ]
        },

        {
            selector: ".active-season",
            property: [
                "background-color: #ff9800 !important;",
                "background-image: url(static/img/fall.jpg);",
                "background-repeat: no-repeat;",
                "background-size: cover;",
                "color:white !important;",
            ]
        },

        {
            selector: ".active-season-cr, .month-hover:hover",
            property: [
                "color: #ff9800 !important;"
            ]
        },

        {
            selector: ".holiday:hover, .active-season-bg",
            property: [
                "background-color: #ff9800 !important;",
            ]
        },

        {
            selector: ".year-meta, .year",
            property: [
                "color: #ff9800;",
            ]
        }
    ],

    "winter": [
        {
            selector: ".num-dates ul li:hover, .num-dates ul li:hover",
            property: [
                "background-color: #0984e3;",
                "color: white;",
            ]
        },

        {
            selector: ".active-season",
            property: [
                "background-color: #0984e3 !important;",
                "color:white !important;",
                "background-image: url(static/img/winter.jpeg);",
                "background-repeat: no-repeat;",
                "background-size: cover;",
            ]
        },

        {
            selector: ".active-season-cr, .month-hover:hover",
            property: [
                "color: #0984e3 !important;"
            ]
        },

        {
            selector: ".holiday:hover, .active-season-bg",
            property: [
                "background-color: #0984e3 !important;",
            ]
        },

        {
            selector: ".year-meta, .year",
            property: [
                "color: #0984e3;",
            ]
        }
    ]
};
