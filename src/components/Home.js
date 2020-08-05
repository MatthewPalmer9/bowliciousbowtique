import React, { PureComponent } from 'react';
import anieka from './anieka.jpg';

export default class Home extends PureComponent {
    render() {
        return (
            <div>
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-col">
                        <div className="lg:w-4/6 mx-auto">
                        
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <img className="anieka" src={anieka} alt="ceo"></img>
                            </div>
                            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ANIEKA SCATES</h2>
                                <p className="text-gray-500">CEO</p>
                            </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">Welcome to the official website for Bowlicious Bowtique! Creating an account is easy! By signing up, you gain access to exclusive deals as well as a platform that keeps record of your entire order history with me! I take pride and passion in every single bow I craft for you and your loved ones, and I am dedicated to making sure your shopping experience with me is among the best!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-bg-dark text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Why Create an Account?
                    </h1>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                        <i className="fas fa-piggy-bank fa-lg"></i>
                        </div>
                        <div className="flex-grow pl-6">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Rewards</h2>
                        <p className="leading-relaxed text-base">Everyone loves savings! At Bowlicious Bowtique, every order on the website adds points on your account towards a free bow reward! Don't worry, we cover all fees on free bow orders.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                        <i className="fas fa-tags"></i>
                        </div>
                        <div className="flex-grow pl-6">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Exclusive Deals</h2>
                        <p className="leading-relaxed text-base">Occasionally, you'll find special deals that are both seasonal and randomly released! Check out the <a className="links" href="/deals"><strong>deals</strong></a> page often!</p>
                        
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                            <i className="fas fa-history"></i>
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Order History</h2>
                            <p className="leading-relaxed text-base">We take care of providing an order history under your account so that you can keep track of all your orders from one place!</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}
