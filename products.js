const products = [
    {
        id: 1,
        name: "علبة سنابل معدنية",
        category: "tools",
        price: "$",
        description: "علبة معدنية معدنية عالية الجودة",
        features: ["معدن مقاوم للصدأ ومتين", "تصميم أنيق وعصري", "سعة جيدة لتخزين السنابل", "سهلة التنظيف والتعقيم", "مناسبة للاستخدام في العيادات والمستشفيات", "الوان متعددة وجذابة"],
        images: [
            "./imgprodects/prodect1.jpeg"
        ]
    },
    {
        id: 2,
        name: "علبة سنابل معدنية حجم صغير مع غطاء",
        category: "tools",
        price: " $",
        description: "علبة سنابل معدنية صغيرة الحجم مع غطاء محكم الإغلاق، مصممة لتوفير حماية مثالية للسنابل أثناء التخزين والنقل.",
        features: ["معدن عالي الجودة مقاوم للصدأ", "تصميم مدمج وصغير الحجم", "غطاء محكم الإغلاق لحماية السنابل", "مهمة لحفظ السنابل بعد التعقيم", "مناسبة للاستخدام في العيادات والمستشفيات", "ألوان متعددة وجذابة"],
        images: [
            "./imgprodects/prodect2.jpeg"
        ]
    },
    {
        id: 3,
        name: "قاطع كوتا",
        category: "devices",
        price: "12 $",
        description: "قاطع كوتا عالي الجودة مصمم لقطع مواد الحشو السنية بدقة وسهولة. مصنوع من مواد متينة لضمان الأداء الممتاز وطول العمر.",
        features: ["تصميم مريح لسهولة الاستخدام", "شفرة حادة ودقيقة لقطع فعال", "مصنوع من مواد متينة مقاومة للتآكل", "سهل التعقيم والتنظيف", "مناسب للاستخدام في العيادات والمستشفيات", "ضمان 2 سنة"],
        images: [
            "./imgprodects/prodect3.jpeg"
        ]
    },
    {
        id: 4,
        name: "فراشي بوند",
        category: "materials",
        price: "1.25 $",
        description: "فراشي بوند عالية الجودة مصممة لتطبيق مواد الربط السنية بدقة وسهولة. توفر توزيعًا متساويًا للمواد لضمان نتائج ممتازة في عمليات الترميم والتجميل.",
        features: ["شعيرات ناعمة ودقيقة لتطبيق مثالي", "تصميم مريح لسهولة الاستخدام", "مصنوعة من مواد عالية الجودة مقاومة للتآكل", "سهل التعقيم والتنظيف", "مناسبة للاستخدام في العيادات والمستشفيات", "متوفرة بأحجام مختلفة لتلبية جميع الاحتياجات"],
        images: [
            "./imgprodects/prodect4.jpeg"
        ]
    },
    {
        id: 5,
        name: "سنابل غيتس غليدن",
        category: "tools",
        price: "4.50 $",
        description: "سنابل غيتس غليدن عالي الجودة مصممة لتطبيق مواد الربط السنية بدقة وسهولة. توفر توزيعًا متساويًا للمواد لضمان نتائج ممتازة في عمليات الترميم والتجميل.",
        features: ["حديدة حادة ودقيقة لقطع فعال", "تصميم مريح لسهولة الاستخدام", "مصنوعة من مواد متينة مقاومة للتآكل", "سهل التعقيم والتنظيف", "مناسبة للاستخدام في العيادات والمستشفيات",],
        images: [
            "./imgprodects/prodect5.jpeg"
        ]
    },
    {
        id: 6,
        name: "جهاز تبيض 8 ليدات",
        category: "devices",
        price: "35 $",
        description: "جهاز تبيض أسنان محمول مزود بـ 8 ليدات عالية الكفاءة لتسريع عملية التبييض وتحقيق نتائج مذهلة في وقت قصير. يتميز بتصميم مريح وسهل الاستخدام مع ضمان نتائج آمنة وفعالة.",
        features:["8 ليدات عالية الكفاءة لتسريع التبييض", "تصميم مريح وسهل الاستخدام", "نتائج سريعة وفعالة في جلسة واحدة", "آمن على الأسنان واللثة"],
        images: [
            "./imgprodects/prodect6.jpeg"
        ]
    },
    {
        id: 7,
        name:"رؤوس جهاز تصليب",
        category: "tools",
        price: "6 $",
        description: "رؤوس جهاز تصليب عالية الجودة مصممة لتوفير أداء ممتاز في عمليات الترميم السنية. تتميز بتصميم متطور يضمن توزيعًا متساويًا للضوء لتحقيق نتائج مثالية في كل استخدام.",
        features: ["تصميم متطور لضمان توزيع متساوي للضوء", "مصنوعة من مواد عالية الجودة مقاومة للتآكل", "سهل التركيب والتبديل على جهاز التصليب", "مناسبة للاستخدام في العيادات والمستشفيات"],
        images: [
            "./imgprodects/prodect7.jpeg"
        ]
    },
    {
        id: 8,
        name: "جهاز تصليب معدني",
        category: "devices",
        price: "35 $",
        description: "جهاز تصليب معدني عالي الجودة مصمم للاستخدام في العيادات السنية. يوفر أداءً ممتازًا في عمليات الترميم السنية.",
        features: ["تصميم معدني قوي ومتين", "مصنوع من مواد عالية الجودة مقاومة للتآكل", "سهل التركيب والصيانة", "الوان متعددة"],
        images: [
            "./imgprodects/prodect8.jpeg"
        ]
    },
    {
        id: 9,
        name: "حامل لفافات قطنية",
        category: "tools",
        price: "3.5 $",
        description: "حامل لفافات قطنية عالي الجودة مصمم لتنظيم وتخزين لفافات القطن بشكل فعال في العيادات والمستشفيات. يتميز بتصميم عملي وعصري يوفر مساحات تخزين واسعة مع أدراج منظمة ومقسّمة لتسهيل الوصول إلى اللفافات عند الحاجة.",
        features: ["تصميم عملي وعصري لتنظيم اللفافات",  "سعة تخزين واسعة تناسب جميع أحجام اللفافات", "اشكال والوان عديدة"],
        images: [
            "./imgprodects/prodect9.jpeg"
        ]
    },
    {
        id: 10,
        name: "مشابك حاجز مطاطي باكستاني",
        category: "materials",
        price: "25 $",
        description: "مشابك حاجز مطاطي باكستاني عالي الجودة مصمم للاستخدام في العيادات السنية. يوفر أداءً ممتازًا في عمليات الترميم السنية.",
        features: ["تصميم مطاطي قوي ومتين", "مصنوع من مواد عالية الجودة مقاومة للتآكل", "متين و مريح"],
        images: [
            "./imgprodects/prodect10.jpeg"
        ]
    },
        {
        id: 11,
        name: "فرد حاقن للإكريل الفموي",
        category: "tools",
        price: "$",
        description: "فرد حاقن عالي الجودة مصمم لتطبيق الإكريل الفموي بدقة وسهولة. يوفر توزيعًا متساويًا للمواد لضمان نتائج ممتازة في عمليات الترميم والتجميل.",
        features: ["تصميم مريح وسهل الاستخدام", "مصنوع من مواد عالية الجودة"],
        images: [
            "./imgprodects/prodect11.jpeg"
        ]
    },
            {
        id: 12,
        name: "قاطع كوتا معدنية",
        category: "tools",
        price: " $",
        description: "قاطع كوتا معدنية عالي الجودة مصمم للاستخدام في العيادات السنية. يوفر أداءً ممتازًا في عمليات الترميم السنية.",
        features: ["تصميم معدني قوي ومتين", "مصنوع من مواد عالية الجودة مقاومة للتآكل", "سهل التركيب "],
        images: [
            "./imgprodects/prodect12.jpeg"
        ]
    },
        {
        id: 13,
        name: "مرايا أسنان",
        category: "tools",
        price: "1.5 $",
        description: "مرايا أسنان عالية الجودة مصممة للاستخدام في العيادات السنية ",
        features: ["تصميم بشكل اسنان", "متانة جيدة", "الوان متعددة"],
        images: [
            "./imgprodects/prodect13.jpeg"
        ]
    },
            {
        id: 14,
        name: "أمثلة تدربية للكمبوزيت",
        category: "materials",
        price: "$",
        description: "امثلة تدربية للكمبوزيت عالية الجودة مصممة لتوفير تجربة تعليمية فعالة في مجال طب الأسنان.",
        features: ["مناسب للطلاب و الشروحات , تحاكي الحالات السريرية الحقيقية"],
        images: [
            "./imgprodects/prodect14.jpeg"
        ]
    },
            {
        id: 15,
        name: "أوتاد معدنية",
        category: "tools",
        price: "4.5$",
        description: "أوتاد معدنية عالية الجودة مصممة للاستخدام في العيادات السنية تتميز بتصميمها العملي ومتانة جيدة.",
        features: ["تصميم معدني قوي ومتين", "مصنوعة من مواد عالية الجودة مقاومة للتآكل", "سهل التركيب والتبديل"],
        images: ["./imgprodects/prodect15.jpeg"]
    },

                {
        id: 16,
        name: "مشابك  Garrison",
        category: "materials",
        price: " $",
        description: "مشابك حاجز مطاطي عالي الجودة مصمم للاستخدام في العيادات السنية. يوفر أداءً ممتازًا في عمليات الترميم السنية.",
        features: ["تصميم مطاطي قوي ومتين", "مصنوع من مواد عالية الجودة مقاومة للتآكل", "متين و مريح"],
        images: ["./imgprodects/prodect16.jpeg"]
    },

        {
        id: 17,
        name: "تلميع وانهاء كمبوزيت",
        category: "materials",
        price: "$",
        description: "تلميع وانهاء كمبوزيت عالي الجودة مصمم لتوفير نتائج تلميع ممتازة في عمليات الترميم والتجميل السنية.",
        features: ["انيقة و عملية"],
        images: ["./imgprodects/prodect17.jpeg"]
    },

                {
        id: 18,
        name: "مساند الأسنان الأمامية",
        category: "tools",
        price: "4.5$",
        description: "مساند الأسنان الأمامية عالي الجودة مصممة للاستخدام في العيادات السنية.",
        features: ["تصميم مريح وسهل الاستخدام", "مصنوع من مواد عالية الجودة"],
        images: ["./imgprodects/prodect18.jpeg"]
    },

                {
        id: 19,
        name: "مطاط حاجز",
        category: "materials",
        price: "$",
        description: "مطاط حاجز عالي الجودة مصمم للاستخدام في العيادات السنية. يوفر أداءً ممتازًا في عمليات الترميم السنية.",
        features: ["مطاط مقاوم للادوات الحادة "," مناسب للعمليات الجراحية "],
        images: ["./imgprodects/prodect19.jpeg"]
    },

                {
        id: 20,
        name: "علب معدنية سنابل مع غطاء (الحجم الكبير)",
        category: "tools",
        price: "6.5 $",
        description: "علبة معدنية معدنية عالية الجودة",
        features: ["معدن مقاوم للصدأ ومتين", "تصميم أنيق وعصري", "سعة جيدة لتخزين السنابل", "سهلة التنظيف والتعقيم", "مناسبة للاستخدام في العيادات والمستشفيات", "الوان متعددة وجذابة"],
        images: [
            "./imgprodects/prodect20.jpeg"
        ]
    },

                {
        id: 21,
        name: "مسطرة لبية وحامل مبارد",
        category: "tools",
        price: " $",
        description: "مسطرة لبية وحامل مبارد عالي الجودة مصمم للاستخدام في العيادات السنية.",
        features: ["تصميم مريح وسهل الاستخدام", "مصنوع من مواد عالية الجودة"],
        images: [
            "./imgprodects/prodect21.jpeg"
        ]
    },
                {
        id: 22,
        name: "مسطرة لبية ومحددة الكوتا",
        category: "tools",
        price: "5 $",
        description: "مسطرة لبية ومحددة الكوتا عالي الجودة مصمم للاستخدام في العيادات السنية.",
        features: ["تصميم مريح وسهل الاستخدام", "مصنوع من مواد عالية الجودة"],
        images: [
            "./imgprodects/prodect22.jpeg"
        ]
    },

                {
        id: 23,
        name: "أوتاد فايبر",
        category: "materials",
        price: "2.5 $",
        description: "أوتاد فايبر عالي الجودة مصممة للاستخدام في العيادات السنية.",
        features: ["تصميم مريح وسهل الاستخدام", "مصنوع من مواد عالية الجودة"],
        images: [
            "./imgprodects/prodect23.jpeg"
        ]

    },

                {
        id: 24,
        name: "أطقم نحت كمبوزيت باكستانية",
        category: "tools",
        price: "25 $",
        description: "أطقم نحت باكستانية عالي الجودة مصممة للاستخدام في العيادات السنية.",
        features: ["تصميم أنيق وعصري", "مصنوع من مواد عالية الجودة","مواد عالية الجودة مقاومة للتآكل", "سهل التعقيم والتنظيف", "مناسبة للاستخدام في العيادات والمستشفيات"],
        images: ["./imgprodects/prodect24.jpeg"]
    },

                {
        id: 25,
        name: "حاملة سنابل ومبارد مع دروج إضافية",
        category: "tools",
        price: "10 $",
        description: "حاملة سنابل ومبارد مع دروج إضافية عالي الجودة مصممة للاستخدام في العيادات السنية.",
        features: ["تصميم مريح وسهل الاستخدام", "مصنوع من مواد عالية الجودة"],
        images: ["./imgprodects/prodect25.jpeg"]
    },

                    {
        id: 26,
        name: "سنابل جودة عالية",
        category: "tools",
        price: "$",
        description: "سنابل عالية الجودة , ممتازة للإستخدامات العامة ",
        features: ["مقاومة للصدأ و التآكل", "تصميم متين وعملي", "متوفرة بأحجام مختلفة لتلبية جميع الاحتياجات"],
        images: ["./imgprodects/prodect26.jpeg"]
    },

                    {
        id: 27,
        name: "مطبق أسنان",
        category: "tools",
        price: "12 $",
        description: "مطبق أسنان عالي الجودة , ممتاز للإستخدامات العامة ",
        features: ["تصميم مريح وسهل الاستخدام", "متين وعملي"],
        images: ["./imgprodects/prodect27.jpeg"]
    },

                    {
        id: 28,
        name: "طقم نحت صابون",
        category: "tools",
        price: "$",
        description: "طقم نحت صابون عالي الجودة مصمم للاستخدامات الطلابية",
        features: ["تصميم مريح وسهل الاستخدام", "متين وعملي"],
        images: ["./imgprodects/prodect28.jpeg"]
    },

                    {
        id: 29,
        name: "دليل الألوان vita",
        category: "",
        price: "30 $",
        description: "دليل الألوان vita عالي الجودة مصمم للاستخدامات الطلابية",
        features: ["مواد ممتازة للحفاظ على الألوان على المدى الطويل"],
        images: ["./imgprodects/prodect29.jpeg"]
    },

                    {
        id: 30,
        name: "زيت قبضة",
        category: "materials",
        price: "$",
        description: "علبة زيت ميكانيكي يدوية للحفاظ على أدواتك في حالة ممتازة. هذا الزيت عالي الجودة مصمم لتقليل الاحتكاك ومنع الصدأ، مما يطيل عمر أدواتك ويضمن أدائها الأمثل في كل استخدام.",
        features: ["الحفاظ على أدواتك في حالة ممتازة", "تقليل الاحتكاك ومنع الصدأ", "تطيل عمر أدواتك وتضمن أدائها الأمثل"],
        images: ["./imgprodects/prodect30.jpeg"]
    },

                    {
        id: 31,
        name: "أطقم فحص صيني",
        category: "tools",
        price: "1.75 $",
        description: "أطقم فحص صيني عالي الجودة مصمم للاستخدام في العيادات السنية.",
        features: ["تصميم مريح وسهل الاستخدام", "مصنوع من مواد عالية الجودة"],
        images: ["./imgprodects/prodect31.jpeg"]
    },

                    {
        id: 32,
        name: "تبيض ليزري أمريكي",
        category: "materials",
        price: "25 $",
        description: "تبيض ليزري أمريكي عالي الجودة مصمم للاستخدام في العيادات السنية.",
        features: ["تصميم مريح وسهل الاستخدام", "مصنوع من مواد عالية الجودة"],
        images: ["./imgprodects/prodect32.jpeg"]
    },

                    {
        id: 33,
        name: "كمبوزيت Tokuuyama",
        category: "materials",
        price: "$",
        description: "كمبوزيت Tokuuyama عالي الجودة مصمم للاستخدام في العيادات السنية.",
        features: ["تصميم مريح وسهل الاستخدام", "مصنوع من مواد عالية الجودة"],
        images: ["./imgprodects/prodect33.jpeg"]
    },

                    {
        id: 34,
        name: "فراشي بوليش أسنان",     
        category: "tools",
        price: "$",
        description: "فراشي بوليش أسنان عالي الجودة مصمم للاستخدام في العيادات السنية.",
        features: ["جميع الموديلات لتحقيق أفضل النتائج", "مصنوع من مواد عالية الجودة"],
        images: ["./imgprodects/prodect34.jpeg"]
    },

                    {
        id: 35,
        name: "طقم باينات باكستاني",
        category: "tools",
        price: "$",
        description: "طقم باينات باكستاني عالي الجودة مصمم للاستخدام في العيادات السنية.",
        features: ["تصميم مريح وسهل الاستخدام", "معدن مقاوم للصدأ"],
        images: ["./imgprodects/prodect35.jpeg"]
    },

                        {
        id: 36,
        name: "لفاقات قطنية",
        category: "materials",
        price: "2.5 $",
        description: "لفافات قطنية شدشدة الإمتصاص عالية الجودة . توفر امتصاصًا فعالًا للسوائل والحفاظ على جفاف منطقة العمل أثناء الإجراءات السنية.",
        features: ["امتصاص فعال للسوائل", "حفاظ على جفاف منطقة العمل"],
        images: ["./imgprodects/prodect36.jpeg"]
    },

                        {
        id: 37,
        name: "طقم قلع كلابات باكستاني",
        category: "tools",
        price: "65 $",
        description: "طقم قلع كلابات باكستاني عالي الجودة مصمم للاستخدام في العيادات السنية.",
        features: ["تصميم مريح وسهل الاستخدام", "مصنوع من مواد عالية الجودة"],
        images: ["./imgprodects/prodect37.jpeg"]
    },

                        {
        id: 38,
        name: "جهاز روتري سمارت 9انظمة",
        category: "devices",
        price: "70 $",
        description: "جهاز روتري سمارت (9 انظمة) عالي الجودة , مزود بجميع الملحقات",
        features: ["جميع الملحقات اللازمة للاستخدام", "موديل مميز وعملي"],
        images: ["./imgprodects/prodect38.jpeg"]
    },

                        {
        id: 39,
        name: "كمامات لون زهر",
        category: "materials",
        price: "2.5 $",
        description: "كمامات لون زهر . توفر حماية فعالة ضد الجسيمات المحمولة جواً والملوثات، مع تصميم مريح يضمن راحة المستخدم طوال فترة الاستخدام",
        features: ["لون انوثي جذاب", "حماية فعالة ضد الجسيمات المحمولة جواً والملوثات", "تصميم مريح يضمن راحة المستخدم طوال فترة الاستخدام"],
        images: ["./imgprodects/prodect39.jpeg"]
    },


                        {
        id: 40,
        name: "رول تغليف",
        category: "materials",
        price: "7 $",
        description: "رول تغليف مصمم للعيادات السنية بشكل خاص , يوفر اداة للحفاظ على الامان و النظافة في العيادات السنية",
        features: ["مقاوم للتمزق بشكل جيد", "سهل الاستخدام و التقطيع", "متوفر بأحجام مختلفة لتلبية جميع الاحتياجات"],
        images: ["./imgprodects/prodect40.jpeg"]
    },


                        {
        id: 41,
        name: "فواتح فم بلاستيك مطاطي",
        category: "materials",
        price: "1.5 $",
        description: "فواتح فم بلاستيك عالي الجودة مصمم للاستخدام في العيادات السنية.",
        features: ["تصميم مريح للمرضى ", "مصنوع من مواد عالية الجودة", "متين ومطاطي ويمتص الضغط ليريح فكي المريض"],
        images: ["./imgprodects/prodect41.jpeg"]
    },

                        {
        id: 42,
        name: "كيت انهاء وتلميع كمبوزيت",
        category: "materials",
        price: "$",
        description: "كيت انهاء وتلميع كمبوزيت عالي الجودة مصمم لتوفير نتائج تلميع ممتازة في عمليات الترميم والتجميل السنية.",
        features: ["اشكال عديدة لتلبية الإحتياجات", "عملي و فعال"],
        images: ["./imgprodects/prodect42.jpeg"]
    },

                        {
        id: 43,
        name: "خواتم معدنية لبية",
        category: "tools",
        price: "2.5$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect43.jpeg"]
    },

                        {
        id: 44,
        name: "نازع تيجان",
        category: "tools",
        price: "15 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect44.jpeg"]
    },

                        {
        id: 45,
        name: "فواتح فم بلاستيك",
        category: "materials",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect45.jpeg"]
    },
    
                        {
        id: 46,
        name: "حامل سينسور",
        category: "tools",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect46.jpeg"]
    },
    
                            {
        id: 47,
        name: "اقراص انهاء كمبوزيت",
        category: "materials",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect47.jpeg"]
    },

                            {
        id: 48,
        name: "حامل سنابل بلاستيك طلابي",
        category: "tools",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect48.jpeg"]
    },

                            {
        id: 49,
        name: "علبة حافظة للمبارد والسنابل",
        category: "tools",
        price: "10 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect49.jpeg"]
    },

                            {
        id: 50,
        name: "اقراص انهاء كمبوزيت",
        category: "materials",
        price: "5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect50.jpeg"]
    },

                            {
        id: 51,
        name: "شانات صينية",
        category: "materials",
        price: "2.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect51.jpeg"]
    },

                            {
        id: 52,
        name: "أغطية حماية وعقامة لكرسي الأسنان",
        category: "materials",
        price: "1.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect52.jpeg"]
    },

                            {
        id: 53,
        name: "محاقن معدنية",
        category: "tools",
        price: "7 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect53.jpeg"]
    },

                            {
        id: 54,
        name: "مبارد h",
        category: "tools",
        price: "1.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect54.jpeg"]
    },

                            {
        id: 55,
        name: "سنابل endo z",
        category: "tools",
        price: "2.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect55.jpeg"]
    },

                            {
        id: 56,
        name: "أكياس تغليف للسينسور",
        category: "materials",
        price: "5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect56.jpeg"]
    },

                            {
        id: 57,
        name: "مبارد k",
        category: "tools",
        price: "1.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect57.jpeg"]
    },

                            {
        id: 58,
        name: "محرك إرواء للمعالجات اللبية",
        category: "devices",
        price: "50 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect58.jpeg"]
    },

                            {
        id: 59,
        name: "محولات لقبضة التوربين",
        category: "tools",
        price: "3.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect59.jpeg"]
    },


                            {
        id: 60,
        name: "K_file",
        category: "materials",
        price: "1.75 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect60.jpeg"]
    },

                            {
        id: 61,
        name: "K.file",
        category: "materials",
        price: "1.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect61.jpeg"]
    },

                            {
        id: 62,
        name: "محولة سنابل",
        category: "tools",
        price: "3.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect62.jpeg"]
    },

                            {
        id: 63,
        name: "K.file",
        category: "materials",
        price: "1.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect63.jpeg"]
    },

                            {
        id: 64,
        name: "K.file",
        category: "materials",
        price: "1.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect64.jpeg"]
    },

                            {
        id: 65,
        name: "خاتم لبية بلاستيك",
        category: "tools",
        price: "1.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect65.jpeg"]
    },

                                {
        id: 66,
        name: "مجموعة ادوات نحت كمبوزيت",
        category: "tools",
        price: "24 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect66.jpeg"]
    },

                                {
        id: 67,
        name: "H.file",
        category: "materials",
        price: "1.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect67.jpeg"]
    },

                                {
        id: 68,
        name: "الواح بلاستيك حافظة للبوند",
        category: "tools",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect68.jpeg"]
    },

                                {
        id: 69,
        name: "صواني بلاستيك طلابية",
        category: "tools",
        price: "2.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect69.jpeg"]
    },


                            {
        id: 70,
        name: "أقماع ورقية meta",
        category: "materials",
        price: "1.75 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect70.jpeg"]
    },

                                {
        id: 71,
        name: "شانات صنية",
        category: "materials",
        price: "3.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect71.jpeg"]
    },

                                {
        id: 72,
        name: "Apex جيل سادس من شركة Hali",
        category: "devices",
        price: "145 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect72.jpeg"]
    },

                                {
        id: 73,
        name: "البيوسيراميك ال one _fil",
        category: "",
        price: "45 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect73.jpeg"]
    },

                                {
        id: 74,
        name: "اللوبس الرأسي مع بطارية اضافية تكبير 3.5×",
        category: "",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect74.jpeg"]
    },

                                {
        id: 75,
        name: "روتري Cicada pura",
        category: "devices",
        price: "110 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect75.jpeg"]
    },

                                {
        id: 76,
        name: "كمبوزيت الGC",
        category: "materials",
        price: "28 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect76.jpeg"]
    },

                                    {
        id: 215,
        name: "كمبوزيت الGC",
        category: "materials",
        price: "38 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect76.jpeg"]
    },

                                {
        id: 77,
        name: "قبضة كفترون",
        category: "devices",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect77.jpeg"]
    },

                                {
        id: 78,
        name: " كاميرا Hyper light   وسينسور eighteeth",
        category: "devices",
        price: "$",
        description: "كاميرا Hyper light   وسينسور eighteeth عالي الجودة مصمم للاستخدام في العيادات السنية. مع كفالة كاملة لمدة 6 اشهر",
        features: [""],
        images: ["./imgprodects/prodect78.jpeg", "./imgprodects/prodect79.jpeg", "./imgprodects/prodect80.jpeg"]
    },

                                {
        id: 81,
        name: "كفوف لون زهر",
        category: "materials",
        price: "5 $",
        description: "متوفر مقاس s .m , كفوف لون زهر . توفر حماية فعالة ضد الجسيمات المحمولة جواً والملوثات، مع تصميم مريح يضمن راحة المستخدم طوال فترة الاستخدام",
        features: [""],
        images: ["./imgprodects/prodect81.jpeg"]
    },

                                {
        id: 82,
        name: "كمامات لون زهر",
        category: "materials",
        price: "1.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect82.jpeg"]
    },

                                {
        id: 83,
        name: "قبضة توربين ضوئية جودة عالية مع قلب احتياطي",
        category: "devices",
        price: "35 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect83.jpeg"]
    },

                                {
        id: 84,
        name: "أجهزة أشعة من شركة وييد بيكر",
        category: "devices",
        price: "1650 $",
        description: "أجهزة أشعة من شركة وييد بيكر كاميرا AiRi_x أحدث إصدار  كفالة لمدة عام كامل + سينسور مقاس 1.5 كفالة لمدة عامين 2",
        features: [""],
        images: ["./imgprodects/prodect84.jpeg","./imgprodects/prodect85.jpeg","./imgprodects/prodect86.jpeg"]
    },

                                {
        id: 87,
        name: "سينسور مقاس 1 + كاميرا من شركة سنتيم",
        category: "devices",
        price: "1225 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect87.jpeg","./imgprodects/prodect88.jpeg","./imgprodects/prodect89.jpeg"]
    },


                                {
        id: 90,
        name: "خيوط إدرينالين",
        category: "materials",
        price: "3 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect90.jpeg"]
    },

                                {
        id: 91,
        name: "حامل حاجز مطاطي بلاستيك",
        category: "materials",
        price: "3.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect91.jpeg"]
    },

                                {
        id: 92,
        name: "نظارات حماية",
        category: "materials",
        price: "1.25 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect92.jpeg"]
    },

                                {
        id: 93,
        name: "شاشة +كميرا فموية",
        category: "devices",
        price: "190 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect93.jpeg"]
    },

                                {
        id: 94,
        name: "جهاز تصليب بلاستيك",
        category: "devices",
        price: "15 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect94.jpeg"]
    },

                                    {
        id: 95,
        name: "مساند للحشوات",
        category: "tools",
        price: "5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect95.jpeg"]
    },

                                {
        id: 96,
        name: "مرايا أسنان طرفين فرونتل",
        category: "tools",
        price: "9 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect96.jpeg"]
    },

                                {
        id: 97,
        name: "رؤوس كفترون وييد بيكر",
        category: "tools",
        price: "7 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect97.jpeg"]
    },

                                {
        id: 98,
        name: "ورق عض",
        category: "materials",
        price: "4.5 $",
        description: "العلبة تحوي 12 دفتر",
        features: [""],
        images: ["./imgprodects/prodect98.jpeg"]
    },

                                {
        id: 99,
        name: "فواتح فم",
        category: "tools",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect99.jpeg"]
    },

                                {
        id: 100,
        name: "اللوبس جهاز عدسات مكبرة",
        category: "devices",
        price: "45 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect100.jpeg"]
    },

                                {
        id: 101,
        name: "بوكس أدوات لطلاب طب الأسنان لتنظيم الادوات",
        category: "tools",
        price: "20 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect101.jpeg","./imgprodects/prodect102.jpeg"]
    },

                                {
        id: 103,
        name: "جهاز تسخين الكمبوزيت وسوائل الارواء",
        category: "devices",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect103.jpeg"]
    },

                                {
        id: 104,
        name: "كيت الدكتور طلال نحلاوي لازالة الادوات المكسورة بالأقنية اللبية",
        category: "tools",
        price: "100 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect104.jpeg"]
    },

                                {
        id: 105,
        name: "روتاري ماركة dte وييد بيكر",
        category: "devices",
        price: "350 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect105.jpeg"]
    },

                                {
        id: 106,
        name: "Apex جيل عاشر وييد بيكر ماركة dte",
        category: "devices",
        price: "190 $",
        description: " Apex جيل عاشر وييد بيكر ماركة dte عالي الجودة , مزود بجميع الملحقات , مع كفالة كاملة لمدة سنة",
        features: [""],
        images: ["./imgprodects/prodect106.jpeg"]
    },

                                {
        id: 107,
        name: "بيوسيراميك angelus البرازيلي",
        category: "materials",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect107.jpeg"]
    },

                                {
        id: 108,
        name: "Apex من شركة الايتيث",
        category: "devices",
        price: "155 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect108.jpeg"]
    },

                                {
        id: 109,
        name: "مفتاح كفترون",
        category: "tools",
        price: "7 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect109.jpeg"]
    },

                                {
        id: 110,
        name:" جهاز مزيل غباش لمرايا التصوير",
        category: "devices",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect110.jpeg"]
    },

                                {
        id: 111,
        name: "Edta سائل",
        category: "materials",
        price: "1.75 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect111.jpeg"]
    },

                                {
        id: 112,
        name: "تويين فلاش",
        category: "devices",
        price: "48 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect112.jpeg"]
    },

                                {
        id: 113,
        name: "مجموعة كمبوزيت كاريزما",
        category: "materials",
        price: "50 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect113.jpeg"]
    },

                                {
        id: 114,
        name: "ماصات لعاب",
        category: "tools",
        price: "3 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect114.jpeg"]
    },

                                {
        id: 115,
        name: "غلاس الصاق صيني",
        category: "materials",
        price: "5.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect115.jpeg"]
    },

                                {
        id: 116,
        name: "امبولات تخدير هندي الليدوكائين مع ادرينالين",
        category: "materials",
        price: "13.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect116.jpeg"]
    },

                        {
        id: 117,
        name: "كمبوزيت سيال كوري",
        category: "materials",
        price: "15 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect117.jpeg"]
    },

                            {
        id: 118,
        name: "مساند أمامية",
        category: "materials",
        price: "7 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect118.jpeg","./imgprodects/prodect119.jpeg"]
    },


                            {
        id: 120,
        name: "شانات صينية",
        category: "materials",
        price: "3 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect120.jpeg"]
    },

                            {
        id: 121,
        name: "شرطان مسندة",
        category: "materials",
        price: "2.75 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect121.jpeg"]
    },

                            {
        id: 122,
        name: "حاجز مطاطي",
        category: "tools",
        price: "20 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect122.jpeg"]
    },

                            {
        id: 123,
        name: "املغميتر",
        category: "devices",
        price: "75 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect123.jpeg"]
    },

                            {
        id: 124,
        name: "باينات قلع",
        category: "tools",
        price: "22 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect124.jpeg"]
    },

                            {
        id: 125,
        name: "آدسيل",
        category: "materials",
        price: "13.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect125.jpeg"]
    },

                            {
        id: 126,
        name: "غطاء محقنة التخدير",
        category: "materials",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect126.jpeg"]
    },

                            {
        id: 127,
        name: "امبولات كمبوزيت everx",
        category: "materials",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect127.jpeg"]
    },

                            {
        id: 128,
        name: "رؤوس بلاستيك لسبريه الهواء",
        category: "tools",
        price: "7 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect128.jpeg"]
    },

                            {
        id: 129,
        name: "كمبوزيت تترك",
        category: "materials",
        price: "24 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect129.jpeg"]
    },

                            {
        id: 130,
        name: "غلاس ضوئي",
        category: "materials",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect130.jpeg"]
    },

                            {
        id: 131,
        name: "كمبوزيت سيال روبي",
        category: "materials",
        price: "6 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect131.jpeg"]
    },

                            {
        id: 132,
        name: "بوند GC من شركة ever x",
        category: "materials",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect132.jpeg"]
    },

                            {
        id: 133,
        name: "مرايا MEGA",
        category: "tools",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect133.jpeg"]
    },

                            {
        id: 134,
        name: "بوند روبي",
        category: "materials",
        price: "8 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect134.jpeg"]
    },

                            {
        id: 135,
        name: "روتري 9 أنظمة",
        category: "devices",
        price: "78 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect135.jpeg"]
    },

                            {
        id: 136,
        name: "اسمنت GC",
        category: "materials",
        price: "30 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect136.jpeg"]
    },

                            {
        id: 138,
        name: "كمبوزيت GC",
        category: "materials",
        price: "28 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect138.jpeg"]
    },

                            {
        id: 139,
        name: "مبارد روتري toko",
        category: "tools",
        price: "5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect139.jpeg"]
    },

                                {
        id:140 ,
        name: "Apex من شركة وييد بيكر",
        category: "devices",
        price: "$",
        description: "Apex من شركة وييد بيكر عالي الجودة , مزود بجميع الملحقات , مع كفالة كاملة لمدة سنة",
        features: [""],
        images: ["./imgprodects/prodect140.jpeg"]
    },

                                    {
        id:141 ,
        name: "قبضلت توربين being",
        category: "tools",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect141.jpeg"]
    },

                                    {
        id:142 ,
        name: "كفوف one plus",
        category: "materials",
        price: "3.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect142.jpeg"]
    },

                                    {
        id:143 ,
        name: "محاقن تخدير الكترونية",
        category: "devices",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect143.jpeg"]
    },

                                    {
        id:144 ,
        name: "حمض الفوسفور",
        category: "materials",
        price: "4.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect144.jpeg"]
    },

                                    {
        id:145 ,
        name: "تبيض أسنان أمريكي",
        category: "materials",
        price: "25 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect145.jpeg"]
    },

                                    {
        id:146 ,
        name: "قبضة مكرتور",
        category: "tools",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect146.jpeg"]
    },

                                    {
        id:147 ,
        name: "بوليش أسنان",
        category: "materials",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect147.jpeg"]
    },

                                    {
        id:148 ,
        name: "شمع حواف",
        category: "materials",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect148.jpeg"]
    },
/////////////////خشبيات من 149 ل 214 بآخر الكود
                                        {
        id:215 ,
        name: "جلفوم",
        category: "materials",
        price: "1.75 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect215.jpeg"]
    },

                                        {
        id:216 ,
        name: "مساند جزئية",
        category: "materials",
        price: "2.5$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect216.jpeg"]
    },
    
                                            {
        id:217 ,
        name: "حبوب تعقيم الفم الف حبة",
        category: "materials",
        price: "15 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect217.jpeg"]
    },

            {
        id:218 ,
        name: "معقم ادوات",
        category: "materials",
        price: "12 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect218.jpeg"]
    },

            {
        id:219 ,
        name: "معقم ادوات",
        category: "materials",
        price: "$",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect219.jpeg"]
    },

            {
        id:220 ,
        name: "كيت الكومبوزيت من شركة كير",
        category: "materials",
        price: "60 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect220.jpeg","./imgprodects/prodect221.jpeg","./imgprodects/prodect222.jpeg"]
    },

            {
        id:223 ,
        name: "كيس الشاش",
        category: "materials",
        price: "2.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect223.jpeg"]
    },

            {
        id:224 ,
        name: "مطبق بلاستيك",
        category: "tools",
        price: "8 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect224.jpeg"]
    },

            {
        id:225 ,
        name: "مطبق معدن",
        category: "tools",
        price: "10 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect225.jpeg"]
    },

            {
        id:226 ,
        name: "تورش",
        category: "tools",
        price: "10 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect226.jpeg"]
    },

            {
        id:227 ,
        name: "كمبوزيت سيال nova",
        category: "materials",
        price: "11 $",
        description: "4 تيوب",
        features: [""],
        images: ["./imgprodects/prodect227.jpeg"]
    },

            {
        id:228 ,
        name: "Nova mta",
        category: "materials",
        price: "14 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect228.jpeg"]
    },

            {
        id:229 ,
        name: "مخدر بدون ادرينالين 50 امبولة",
        category: "materials",
        price: "25 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect229.jpeg"]
    },

            {
        id:230 ,
        name: "Cera seal Meta",
        category: "materials",
        price: "58 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect230.jpeg"]
    },

            {
        id:231 ,
        name: "Zeta plus مجموعة سيلكون",
        category: "materials",
        price: "6 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect231.jpeg"]
    },

                {
        id:232 ,
        name: "Zink phosphate",
        category: "materials",
        price: "6 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect232.jpeg"]
    },

            {
        id:233 ,
        name: "أسمنت الصاق Meron",
        category: "materials",
        price: "36 $",
        description: "تثبيت قوي وموثوق للترميمات",
        features: [""],
        images: ["./imgprodects/prodect233.jpeg"]
    },

            {
        id:234 ,
        name: "بولبتك الروسي",
        category: "materials",
        price: "15 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect234.jpeg"]
    },

                {
        id:235 ,
        name: "Vioseal ( root canal sealing material )",
        category: "materials",
        price: "15 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect235.jpeg"]
    },

            {
        id:236 ,
        name: "قاتل عصب روسي",
        category: "materials",
        price: "7 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect236.jpeg"]
    },

            {
        id:237 ,
        name: "عازل لثة امركي",
        category: "materials",
        price: "4.5 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect237.jpeg"]
    },

            {
        id:238 ,
        name: "MTA RPPT _X PRO",
        category: "materials",
        price: "15 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect238.jpeg"]
    },

            {
        id:239 ,
        name: "مخدر موضعي",
        category: "materials",
        price: "3 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect239.jpeg"]
    },

            {
        id:240 ,
        name: "Disposable",
        category: "materials",
        price: "7 $",
        description: "",
        features: [""],
        images: ["./imgprodects/prodect240.jpeg"]
    },

];




//// خشبيات العيادة الصور من 149 ل 214
for (let id = 149; id <= 214; id++) {
    products.push({
        id: id,
        name: "خشبيات عيادة مماثلة للصورة",
        category: "wooden",
        price: "$",
        priceOnRequest: true,
        description: "",
        features: [""],
        images: [`./imgprodects/prodect${id}.jpeg`]
    });
}