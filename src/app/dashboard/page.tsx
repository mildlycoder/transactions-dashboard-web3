"use client";
import { useEffect, useState } from "react";
import { VirtualizedList } from "../compononets/dashboard-components/VirtualizedList";
import { useUser } from "@clerk/nextjs";

const getData = async (address: string) => {
    const apiKey = process.env.NEXT_PUBLIC_ES_KEY

    if (!apiKey) {
        throw new Error("Etherscan API key is not defined");
    }

    const url = `https://api.etherscan.io/api`
        + `?module=account`
        + `&action=txlist`
        + `&address=${address}`
        + `&startblock=0`
        + `&endblock=99999999`
        + `&sort=asc`
        + `&apikey=${apiKey}`;

    try {
        const res = await fetch(url, { cache: "no-store" });
        const data = await res.json();

        if (data.status === "1") {
            return data.result;
        } else {
            throw new Error(data.message || "Failed to fetch transactions");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

export default function Dashboard() {
    const defaultAddress = '0xa83114A443dA1CecEFC50368531cACE9F37fCCcb';
    const [selectedAddress, setSelectedAddress] = useState(defaultAddress);
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useUser();

    useEffect(() => {
        const fetchData = async () => {
            if (selectedAddress) {
                setIsLoading(true);
                const response = await getData(selectedAddress);
                setList(response);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [selectedAddress]);

    useEffect(() => {
        if (user?.web3Wallets?.[0]?.web3Wallet) {
            setSelectedAddress(user.web3Wallets[0].web3Wallet);
        } else {
            setSelectedAddress(defaultAddress);
        }
    }, [user]);

    const handleButtonClick = (address: string | undefined) => {
        if (address === undefined) return
        setSelectedAddress(address);
    };

    return (
        <div className="flex flex-col bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen">
            <h1 className="text-2xl m-5 p-5 text-white">Welcome to Web3 Tracker</h1>
            <div className="flex gap-5 m-5 p-5">
                <button
                    onClick={() => handleButtonClick(user?.web3Wallets?.[0]?.web3Wallet)}
                    className={`p-2 rounded ${selectedAddress === (user?.web3Wallets?.[0]?.web3Wallet) ? 'bg-blue-500' : 'bg-gray-500'}`}
                >
                    User Wallet
                </button>
                <button
                    onClick={() => handleButtonClick(defaultAddress)}
                    className={`p-2 rounded ${selectedAddress === defaultAddress ? 'bg-blue-500' : 'bg-gray-500'}`}
                >
                    Default Address
                </button>
            </div>
            <div className="flex flex-col gap-5">
                {isLoading ? (
                    <div className="text-white p-5 m-5">Loading...</div>
                ) : list.length > 0 ? (
                    <VirtualizedList list={list} />
                ) : (
                    <div className="text-white p-5 m-5">No transactions were found for {selectedAddress}</div>
                )}
            </div>
        </div>
    );
}

