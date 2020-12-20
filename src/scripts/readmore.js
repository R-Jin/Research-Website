const openBoxButtons = document.querySelectorAll('[data-box-target]')
const closeBoxButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

const members = {
    tao: {
        name: "Tao Jin",
        info: "Studied medicin during 1990-1995 and received master degree in Anatomy at Suzhou Medical College, Suzhou, China in 2000. Defended thesis at Dept. of Rheumatology and Inflammation Research, University of Gothenburg in 2005. Thereafter worked with Prof. Andrej Tarkowski as postdoc fellow and became associate professor in 2008. Currently works as consultant rheumatologist with 50% research time in Sahlgrenska University Hospital."
    },
    majd: {
        name: "Majd Mohammad",
        info: "Majd graduated and obtained his MSc degree as a pharmacist in 2015 from the University of Gothenburg, Sweden. The following year he was working as the Deputy manager of Quality and Regulatory affairs and as a product specialist in a pharmaceutical company. He started as a PhD student at the group during the summer of 2016. He got his PhD degree in Medical Science in September 2020. During his PhD studies, he was mainly focusing on investigating the role of lipoproteins in Staphylococcus aureus infections in murine models, more specifically in septic arthritis and skin infections. He is currently working as a postdoctoral fellow."
    },
    pradeep: {
        name: "Pradeep Kumar Kopparapu",
        info: "Pradeep Kumar Kopparapu has done his Bachelor's of technology in Biotechnology at SRM University, India. Later he moved to Sweden and completed a dual master's one in molecular biology and another in medical biology from Lund University, Sweden. In 2014, he joined the Meena Kanduri group at the University of Gothenburg to pursue PhD studies in the area of epigenetic regulation in B-cell leukemia. He is now working with Tao Jin's group as a postdoctoral researcher in the field of epigenetic mechanisms with septic arthritis and sepsis."
    },
    zhicheng: {
        name: "Zhicheng Hu",
        info: "Zhicheng joined Tao’s lab as an exchange student in 2017, during which he gained experience in investigating the development of sepsis and septic arthritis in murine models in the lab. He obtained his degree of Master of Medicine in Clinical Laboratory Diagnostics (2020) in Guizhou Medical University, China. He was enrolled as a PhD student in Tao’s lab during the winter of 2020, where he will continue to understand the function of Phenol Soluble Modulins of Staphylococcusaureus-induced infections."
    },
    meghshree: {
        name: "Meghshree Deshmukh",
        info: "Meghshree Deshmukh has obtained her Bachelors (2008) and Masters (2010) from the University of Mumbai, India. She has been involved in Research for past 8 years before being a part of our team. She has gained experience in microbiology, molecular biology, Immunology and histology techniques. She has joined our lab recently and will be part of studies involving animal models (mice) for finding new markers for diagnosis as well as new strategies for treatment of septic arthritis."
    },
    michelle: {
        name: "Michelle Schultz",
        info: "Michelle is a research intern in the group and is currently studying the Programme in Medicine at the University of Gothenburg. She joined the group during a summer internship in 2020."
    },
    balsam: {
        name: "Balsam Hanna",
        info: "Balsam graduated as examinated physician (MD) from medical school, University of Mosul, Irak in 1993 and swedish MD at Karolinska University Hospital in 1999. She is consultant in rheumatology clinic, Sahlgrenska University Hospital since 2009. She started as a PhD student at the group in april-2019. Her PhD project is mainly focusing on investigating the cardiac involvement and osteoporosis in patients with idiopathic inflammatory myopathies."
    },
    anders: {
        name: "Anders Jarneborn",
        info: ""
    }
}

openBoxButtons.forEach(button => {
    button.addEventListener('click', () => {
        const box = document.querySelector(button.dataset.boxTarget)
        const member = button.id

        const title = document.getElementById("title")
        const info = document.getElementById("box-body")

        title.innerText = members[member].name
        info.innerText = members[member].info

        openBox(box)
    })
})

closeBoxButtons.forEach(button => {
    button.addEventListener('click', () => {
        const box = button.closest('.box')
        closeBox(box)
    })
})

function openBox(box) {
    if (box == null) {
        return
    } 
    box.classList.add('active')
    overlay.classList.add('active')
}

function closeBox(box) {
    if (box == null) {
        return
    } 
    box.classList.remove('active')
    overlay.classList.remove('active')
}