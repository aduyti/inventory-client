import { HomeIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline';
import React from 'react';
import MapLocation from '../MapLocation/MapLocation';

const ContactSection = () => {
    return (
        <>
            <h2 className="text-3xl font-bold text-cyan-600 py-8">Contact Us</h2>

            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mx-5 mb-8">
                <div className="border-2 rounded-lg border-gray-400 h-[350px] w-[350px] mx-auto">
                    <MapLocation />
                </div>

                <div className="h-[350px] w-[350px] mx-auto pl-10 pt-16">
                    <table className="text-left w-full table-auto">
                        <tbody>
                            <tr>
                                <td className="align-top w-24"><HomeIcon className="inline w-4 h-4" /><span className="pl-1"> Address</span> </td><td>: 343/24, Arjatpara, Mohakhali, Dhaka.</td>
                            </tr>
                            <tr>
                                <td><MailIcon className="inline w-4 h-4" /><span className="pl-1"> Email</span> </td><td>: info@laphouse.com</td>
                            </tr>
                            <tr>
                                <td><PhoneIcon className="inline w-4 h-4" /><span className="pl-1"> Phone</span> </td><td>: +00000111111111</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ContactSection;