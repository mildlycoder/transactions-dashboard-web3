"use client";
import { useEffect, useState, useRef } from 'react';
import { ITransaction } from '@/types';
import { Virtuoso, VirtuosoHandle } from 'react-virtuoso';
import TransactionCard from './TransactionCard';

interface VirtualizedListProps {
    list: ITransaction[];
}

export const VirtualizedList = (props: VirtualizedListProps) => {
    const { list } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const virtuosoRef = useRef<VirtuosoHandle>(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 3) % list.length;
                virtuosoRef.current?.scrollToIndex({
                    index: nextIndex,
                    align: 'start',
                    behavior: 'smooth',
                });
                return nextIndex;
            });
        }, 2000); // Adjust the interval as needed

        return () => clearInterval(intervalId);
    }, [list.length]);

    return (
        <Virtuoso
            ref={virtuosoRef}
            useWindowScroll
            totalCount={list.length}
            itemContent={index => (
                <div>
                    <TransactionCard transaction={list[index]} />
                </div>
            )}
        />
    );
};

