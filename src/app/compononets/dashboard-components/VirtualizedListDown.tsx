"use client";
import { ITransaction } from '@/types';
import TransactionCard from './TransactionCard';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

interface VirtualizedListProps {
    list: ITransaction[];
}

export const VirtualizedListDown = (props: VirtualizedListProps) => {
    const { list } = props;
    const [reverse, setReverse] = useState(false);

    // Controls animation
    const controls = useAnimationControls();

    useEffect(() => {
        const animateScroll = async () => {
            await controls.start({
                y: 0, transition: { duration: 5, ease: "linear" }
            });

            await controls.start({
                y: 300,
                transition: { duration: 5, ease: "linear" }
            });

            setReverse(!reverse);
        };

        animateScroll();

    }, [reverse]);

    return (
        <div style={{ overflow: 'hidden', height: '100vh', position: 'relative' }}>
            <motion.div
                animate={controls}
                style={{ display: 'flex', flexDirection: 'column-reverse' }}
            >
                {list.map((transaction) => (
                    <TransactionCard
                        key={`${transaction.transactionIndex}-duplicate`}
                        transaction={transaction}
                    />
                ))}
            </motion.div>
        </div>
    );
};

