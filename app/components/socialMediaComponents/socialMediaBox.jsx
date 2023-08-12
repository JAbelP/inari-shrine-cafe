import React from 'react';
import SocialMediaBar from './SocialMediaBar';
import localFont from 'next/font/local'

const SunnySpell = localFont({src: '../../../fonts/SunnySpellsBasicRegular.ttf'})

function SocialMediaBox() {
    const socialMediaArr = [
        { title: 'Facebook', icon: 'Social Media Icons/icons8-facebook-16.png' ,Link:"https://www.facebook.com/profile.php?id=100089514412205&mibextid=LQQJ4d"},
        { title: 'Instagram', icon: 'Social Media Icons/icons8-instagram-16.png', Link:"https://www.instagram.com/inari.shrine.cafe/" },
        { title: 'Tik Tok', icon: 'Social Media Icons/icons8-tik-tok-16.png', Link:"https://www.tiktok.com/@inarishrine3" },
        { title: 'Tumblr', icon: 'Social Media Icons/icons8-tumblr-16.png', Link:"https://inarishrinecafe.tumblr.com/" }
    ];

    return (
        <div>
            <div className="text-black text-2xl font-normal capitalize font-headerFont">
                <p className={SunnySpell.className}>
                    follow our Socials!
                </p>
            </div>
            <div className='bg-orange-300 w-72 h-36 rounded-2xl border-2 border-black text-center py-2  '>
                {socialMediaArr.map((social, i) => (
                    <SocialMediaBar key={i} SocialMediaTitle={social.title} SocialMediaIcon={social.icon} SocialMediaLink={social.Link}/>
                ))}
            </div>
        </div>
    );
}

export default SocialMediaBox;
