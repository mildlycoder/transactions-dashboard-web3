"use client"
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { ITransaction } from '@/types';
import TransactionModal from './TransactionModal';
interface TransactionCardProps {
    transaction: ITransaction;
}

export default function TransactionCard(props: TransactionCardProps) {
    const control = useAnimation();
    const [ref, inView] = useInView();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const exampleVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0 },
    };

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const { transaction } = props;
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <motion.div
                variants={exampleVariant}
                ref={ref}
                initial="hidden"
                animate={control}
                 onClick={handleOpenModal}
                className={`bg-blue-400 m-5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-md mx-auto p-5 w-[95%] lg:w-[60%] flex flex-col gap-5`}
            >
                <div className="flex items-center gap-3">
                    <h1 className="text-md flex flex-col line-clamp-6">
                        <span>From</span>
                        <span className='md:hidden'>
                            {`${transaction.from.slice(0, 6)}.....${transaction.from.slice(-4)}`}
                        </span>
                        <span className='hidden md:inline-block'>
                            {transaction.from}
                        </span>
                    </h1>
                    <div className=''>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </div>
                    <h1 className="text-md flex flex-col text-ellipsis">
                        <span>To</span>
                        <span className='md:hidden'>
                            {`${transaction.to.slice(0, 6)}.....${transaction.from.slice(-4)}`}
                        </span>
                        <span className='hidden md:inline-block'>
                            {transaction.to}
                        </span>
                    </h1>
                </div>
                <h1 className="text-xl flex flex-col">
                    value
                    <span className="text-3xl">{transaction.value}</span>
                </h1>
            </motion.div>{isModalOpen && (
                <TransactionModal transaction={transaction} onClose={handleCloseModal} />
            )}
        </>

    );
}

