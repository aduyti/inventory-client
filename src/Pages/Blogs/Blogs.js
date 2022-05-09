import React from 'react';

const Blogs = () => {
    return (
        <div className="p-10">
            <h2 className="text-3xl font-bold text-cyan-600 pb-8">My Concept</h2>
            <div className="w-5/6 md:w-4/6 lg:w-1/2 mx-auto p-2">

                <div className="border-2 rounded-lg border-gray-400 p-3 my-3">
                    <h3 className="text-xl font-bold">Difference between javascript and node js</h3>
                    <p className="text-sm text-justify">javascript is a programming language, nodejs is an interpreter or runtime environment for javascript. javascript generally runs on browsers. nodejs runs on server. nodejs consists of V8 engine and some sets of libraries.</p>
                </div>
                <div className="border-2 rounded-lg border-gray-400 p-3 my-3">
                    <h3 className="text-xl font-bold">When should you use nodejs and when should you use mongodb</h3>
                    <p className="text-sm text-justify">nodejs is a javascript runtime environment. by nature it is asynchronous. nodejs is mostly used in stand-alone applications or server, where asynchronous operation mandatory. mongodb is a nosql database. it stores data in json format and can do operations on those. nodejs and mongodb can be use together.</p>
                </div>
                <div className="border-2 rounded-lg border-gray-400 p-3 my-3">
                    <h3 className="text-xl font-bold">Differences between sql and nosql databases</h3>
                    <p className="text-sm text-justify">sql databases store data in tabulated structure. nosql databases can store data in document, key-value pairs, graph, etc. sql databases are for structured datasets, while nosql databases are for unstructured datasets.sql databases are also called relational databases, nosql databases are called nonrelational databases.</p>
                </div>
                <div className="border-2 rounded-lg border-gray-400 p-3 my-3">
                    <h3 className="text-xl font-bold">What is the purpose of jwt and how does it work</h3>
                    <p className="text-sm text-justify">jwt is used for granting access to an authorized client for protected data in server. client sends a request to server along with the data to verify his identity. using these data server creates a token and send it to client to store. then to access protected data client sends a request along with the jwt and after verifying it server sends the response back.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;