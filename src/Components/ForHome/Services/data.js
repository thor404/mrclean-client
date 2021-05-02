
import home from '../../../Images/home-2.jpg'
import car from '../../../Images/car.jpg'
import carpet from '../../../Images/carpet.jpg'
import office from '../../../Images/office.jpg'
import windows from '../../../Images/windows.jpg'

import p1 from '../../../Images/home-2.jpg'
import p2 from '../../../Images/home-clean.png'
import p3 from '../../../Images/p3.jpg'
import p4 from '../../../Images/building.jpg'
import p5 from '../../../Images/carpet-cl.jpg'

import img from '../../../Images/avatar.png';

export const fakeServicesData = [
    {
        img:home,
        title:'House Cleaning',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur vitae sint molestiae optio assumenda?',
        price:'230'
    },
    {
        img:carpet,
        title:'Carpet Cleaning',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur vitae sint molestiae optio assumenda?',
        price:'145'
    },
    {
        img:car,
        title:'Car Washing',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur vitae sint molestiae optio assumenda?',
        price:'345'
    },
    {
        img:office,
        title:'Office Cleaning',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur vitae sint molestiae optio assumenda?',
        price:'456'
    },
    {
        img:windows,
        title:'Windows Cleaning',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur vitae sint molestiae optio assumenda?',
        price:'543'
    }

]



export const projectData = [
    {
        img:p1,
        title:'Successfully Cleaned',
        option:['Floor', 'Tob', 'Lab', "Whole Room"]
    },
    {
        img:p2,
        title:'Successfully cleaned', 
        option: ['Room', 'corner Area', 'All work station', 'Whole corner']
    }, 
    {
        img:p3,
        title:'Successfully cleaned', 
        option:['Wheels', 'Vents', 'Engine Bay',  'Undercarriage']
    },
    {
        img:p4, 
        title: 'Successfully cleaned',
        option:['Cleaning', 'Painting', 'More Washing', 'Whole Building']
    }, 
    {
        img:p5,
        title:"Successfully cleaned",
        option:['Washing','Lingering Odors', 'Specifications', 'Carpet’s Lifespan']
    }
]



export const pricingData = [
    {
        type:'Standard',
        price:15,
        per:'Per Hour',
        services:['Trained Cleaner', 'Maintainance Cleaning', 'Liablity Insurance', 'Planned Holidy Cover', 'Feedback Center Access'],
        off:''
    },
    {
        type:'Premium',
        price:150,
        per:'Per Day',
        services:['Experienced & Trained Cleaner', 'Maintenance Cleaning', 'Insured Liability & Damage', 'Planned Holiday Cover','You Choose from 3 Cleaning Days'],
        off:'5% Off'
    }, 
    {
        type:'Ultimate',
        price:3000,
        per:'Per Month',
        services:['Experienced & Trained Cleaner', 'Insured Liability & Damage', 'Insured Liability & Damage', 'Planned Holiday Cover', 'You Choose Cleaning Day'],
        off:'20% Off'
    }
]



export const testiMonialData = [
    {
        img:img,
        name:'John Smilga',
        review:'It was gratifying to refer this company to my customer. Their attention to detail and outstanding results was beyond satisfactory. The home showed so well it was under contract quickly.',
        company:'CEO, White House'
    },
    {
        img: img, 
        name: 'Sanai Sonam',
        review:'Fast Cleaning is a local upstanding & reliable cleaning company that I would recommend for your commercial needs !',
        company:'Worker, HUC Agency.'
    }, 
    {
        img:img,
        name:'Uman Raiku Bn.',
        review:'Friendly. Professional. And did a thorough job. Look forward to future businesd! Thank you i new you more.',
        company:'GM. BNC Com'
    },
    {
        img:img,
        name:'Bankin Mun',
        review:'WOW!  WOW!! WOW!!! Does this say how pleased my sister and I are with your services?  The house looks TERRIFIC and if it is ok with you, we would LOVE to pass your information on to our realtor. ',
        company:'Member, RSA Home'
    },
    {
        img:img,
        name:'Baby Yums',
        review:'Our company has been serviced by Helping Hand Cleaning for more than 13 years. They are very professional, detailed, and fast. They are very accommodating as far as scheduling our service',
        company:'Driver, HUD Car.'
    }
]