"use client"
import { useEffect, useState } from 'react';
import { ITransaction } from '@/types';
import { Virtuoso } from 'react-virtuoso'
import TransactionCard from './TransactionCard';
interface VirtualizedListProps {
    list: ITransaction[];
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const VirtualizedList = (props: VirtualizedListProps) => {
    const { list } = props
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    return (
        <Virtuoso
            style={{ height: windowDimensions.height - 100 }}
            totalCount={list.length}
            itemContent={index => <div>
                <TransactionCard transaction={list[index]} />
            </div>}
        />
    )
}

