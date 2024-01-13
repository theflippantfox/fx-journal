interface Trade {
    id: number | string;
    pair: string;
    date: string | Date;
    direction: 'LONG' | 'SHORT';
    setup: string[];
    risk: number;
    size: number;
    entry: number;
    exit: number;
    gross_pnl: number;
    comission: number;
    net_pnl: number;
    roi: number
    images: string[]
}

const genList = (trades: Trade[]) => {
    const tradeList = trades.map(trade => {
        return {
            id: trade.id,
            pair: trade.pair,
            date: trade.date,
            direction: trade.direction,
            entry: trade.entry,
            exit: trade.exit,
            gross_pnl: trade.gross_pnl,
            roi: trade.roi,
        }
    })
    console.log(tradeList)
    return tradeList
}

const trades: Trade[] = [
    {
        id: 1,
        pair: 'XAUUSD',
        date: Date.now().toLocaleString(),
        direction: 'LONG',
        setup: ['FVG', 'BB'],
        risk: 1,
        size: 0.04,
        entry: 1232,
        exit: 2321,
        gross_pnl: 32.4,
        comission: 0,
        net_pnl: 32.4,
        roi: 1,
        images: ['url']
    },
    {
        id: 2,
        pair: 'XAUUSD',
        date: Date.now().toLocaleString(),
        direction: 'LONG',
        setup: ['FVG', 'BB'],
        risk: 1,
        size: 0.04,
        entry: 1232,
        exit: 2321,
        gross_pnl: 32.4,
        comission: 0,
        net_pnl: 32.4,
        roi: 1,
        images: []
    }
];
export const load = () => {
    return {
        trades: genList(trades)
    }
}
