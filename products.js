const products = [
    {
        id: 1,
        name: "كرسي أسنان كهربائي متطور",
        model: "DentPro-X200",
        category: "chairs",
        price: "12,500 $",
        description: "كرسي أسنان كهربائي متطور مع إمكانيات متعددة للراحة والدقة في العمل. مزود بنظام تحكم ذكي وشاشة تعمل باللمس، ومصمم لتوفير أقصى درجات الراحة للمريض والطبيب.",
        features: ["تحكم كهربائي كامل", "شاشة لمس عالية الدقة", "إضاءة LED طبية", "ذاكرة متعددة الإعدادات", "تصميم مريح وعصري", "نظام تعقيم متكامل"],
        images: [
            "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500",
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500",
            "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500"
        ]
    },
    {
        id: 2,
        name: "مجموعة أدوات سنية متكاملة",
        model: "DentTools Pro",
        category: "tools",
        price: "8,900 $",
        description: "مجموعة شاملة من الأدوات السنية عالية الجودة المصنوعة من الفولاذ المقاوم للصدأ. تشمل جميع الأدوات الأساسية للعيادة مع ضمان الجودة والمتانة.",
        features: ["فولاذ جراحي مقاوم للصدأ", "مجموعة متكاملة 150 قطعة", "متانة عالية وقوة تحمل", "سهلة التعقيم والتطهير", "ضمان 5 سنوات", "حقيبة تخزين خاصة"],
        images: [
            "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500",
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500",
            "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500"
        ]
    },
    {
        id: 3,
        name: "مواد حشوة بيضاء عالية الجودة",
        model: "WhiteFill Pro",
        category: "materials",
        price: "1,200 $",
        description: "حشوة بيضاء عالية الجودة تتميز بالمتانة واللون الطبيعي المماثل للأسنان الطبيعية. مناسبة للحشوات التجميلية والوظيفية معاً.",
        features: ["لون طبيعي مماثل للأسنان", "متانة عالية تصل إلى 10 سنوات", "مقاومة عالية للتآكل", "سهلة التطبيق والتشكيل", "نتائج دائمة وجميلة", "معتمدة من منظمات طبية عالمية"],
        images: [
            "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500",
            "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500",
            "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500"
        ]
    },
    {
        id: 4,
        name: "بدلة طبية عالية الجودة",
        model: "MediWear Pro",
        category: "clothing",
        price: "350 $",
        description: "بدلة طبية مصنوعة من قماش عالي الجودة يوفر الراحة والاحترافية. مصممة بتقنية مقاومة للبكتيريا وسهلة التنظيف.",
        features: ["قماش عالي الجودة مضاد للبكتيريا", "مقاسات متنوعة تناسب الجميع", "ألوان متعددة وأنيقة", "سهلة التنظيف والتعقيم", "مريحة للارتداء طوال اليوم", "جيوب عملية ومتعددة"],
        images: [
            "https://images.unsplash.com/photo-1584467735871-8db9ac8e5e3a?w=500",
            "https://images.unsplash.com/photo-1551076805-e1869033e561?w=500",
            "https://images.unsplash.com/photo-1584467735871-8db9ac8e5e3a?w=500"
        ]
    },
    {
        id: 5,
        name: "كرسي أسنان فاخر ذكي",
        model: "LuxDent 850",
        category: "chairs",
        price: "18,900 $",
        description: "كرسي أسنان فاخر بتصميم عصري ومريح للمريض والطبيب. مزود بأحدث التقنيات الذكية والتحكم الرقمي المتكامل.",
        features: ["تصميم فاخر وعصري", "تحكم رقمي متكامل", "إضاءة متطورة ذكية", "ذاكرة متعددة للمرضى", "ضمان 3 سنوات شاملة", "نظام تدفئة وتبريد مدمج"],
        images: [
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500",
            "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500",
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500"
        ]
    },
    {
        id: 6,
        name: "مجموعة أدوات التشخيص المتكاملة",
        model: "DiagnoSet Pro",
        category: "tools",
        price: "2,500 $",
        description: "مجموعة متكاملة من أدوات التشخيص السني، تشمل المرايا والمسبار والملاقط وغيرها من الأدوات الأساسية للتشخيص الدقيق.",
        features: ["أدوات متكاملة للتشخيص", "جودة عالية ودقة متناهية", "سهلة التعقيم والتخزين", "تصميم مريح في اليد", "ضمان 3 سنوات", "حقيبة تخزين منظمة"],
        images: [
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500",
            "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500",
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500"
        ]
    },
    {
        id: 7,
        name: "مادة التبييض السنية المتطورة",
        model: "WhiteSmile Plus",
        category: "materials",
        price: "850 $",
        description: "مادة تبييض سنية فعالة وآمنة تعطي نتائج مذهلة في وقت قصير مع الحفاظ على صحة الأسنان ومنع الحساسية.",
        features: ["نتائج سريعة خلال أسبوع", "آمنة على المينا واللثة", "تأثير طويل الأمد يصل إلى سنة", "تركيبة متطورة خالية من الألم", "سهلة الاستخدام والتطبيق", "معتمدة من جمعيات طب الأسنان"],
        images: [
            "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500",
            "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500",
            "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500"
        ]
    },
    {
        id: 8,
        name: "خزانة أدوية خشبية فاخرة",
        model: "MediCabinet Pro",
        category: "wooden",
        price: "3,200 $",
        description: "خزانة أدوية خشبية عالية الجودة مصممة خصيصًا للعيادات السنية. مزودة بأدراج متعددة وأقفال أمان ومرايا مدمجة.",
        features: ["خشب عالي الجودة مقاوم للرطوبة", "تصميم أنيق وفاخر", "أدراج متعددة منظمة", "أقفال أمان إلكترونية", "سهلة التنظيف والصيانة", "مرايا مدمجة للإضاءة"],
        images: [
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500",
            "https://images.unsplash.com/photo-1585435557343-3b1d5d4bcd58?w=500",
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500"
        ]
    },
    {
        id: 9,
        name: "طاولة خشبية للعيادة الفاخرة",
        model: "ClinicTable Pro",
        category: "wooden",
        price: "4,500 $",
        description: "طاولة خشبية مصممة خصيصًا للعيادات السنية، مزودة بمساحات تخزين وأدراج منظمة للأدوات ومصنوعة من أخشاب فاخرة.",
        features: ["تصميم عملي وعصري", "مساحات تخزين واسعة", "أدراج منظمة ومقسّمة", "خشب متين عالي الجودة", "سهلة التنظيف والتعقيم", "حواف آمنة مستديرة"],
        images: [
            "https://images.unsplash.com/photo-1585435557343-3b1d5d4bcd58?w=500",
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500",
            "https://images.unsplash.com/photo-1585435557343-3b1d5d4bcd58?w=500"
        ]
    },
    {
        id: 10,
        name: "معطف طبي فاخر",
        model: "DoctorCoat Pro",
        category: "clothing",
        price: "280 $",
        description: "معطف طبي فاخر مصنوع من قماش عالي الجودة، يوفر مظهرًا احترافيًا وراحة أثناء العمل مع تصميم مقاوم للتجاعيد.",
        features: ["قماش عالي الجودة مقاوم للتجاعيد", "تصميم مريح وأنيق", "جيبان كبيران وجيب قلبي", "سهل الكي والتنظيف", "متوفر بمقاسات مختلفة", "ألوان متعددة واحترافية"],
        images: [
            "https://images.unsplash.com/photo-1551076805-e1869033e561?w=500",
            "https://images.unsplash.com/photo-1584467735871-8db9ac8e5e3a?w=500",
            "https://images.unsplash.com/photo-1551076805-e1869033e561?w=500"
        ]
    }
];