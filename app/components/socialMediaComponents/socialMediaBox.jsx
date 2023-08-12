import React from 'react';
import SocialMediaBar from './SocialMediaBar';

function SocialMediaBox() {
    console.log('SocialMediaBox');
    const socialMediaArr = [
        { title: 'Facebook', icon: 'Social Media Icons/icons8-facebook-16.png' },
        { title: 'Instagram', icon: 'Social Media Icons/icons8-instagram-16.png' },
        { title: 'Tik Tok', icon: 'Social Media Icons/icons8-tik-tok-16.png' },
        { title: 'Tumblr', icon: 'Social Media Icons/icons8-tumblr-16.png' }
    ];

    return (
        <div>
            <div className="text-black text-2xl font-normal capitalize">follow our Socials!</div>
            <div className='bg-orange-300 w-72 h-36 rounded-2xl border-2 border-black text-center py-2  '>
                {socialMediaArr.map((social, i) => (
                    <SocialMediaBar key={i} SocialMediaTitle={social.title} SocialMediaIcon={social.icon} />
                ))}
            </div>
        </div>
    );
}

export default SocialMediaBox;
