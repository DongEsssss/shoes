interface SetItem {
    name: string;
    price: number;
    category: string;
    description: string;
    productCode: string;
    image: string;
}

interface HotItem {
    id: string;
    title: string;
    content: string;
    category: string;
    image?: string;
    set?: SetItem[];
    createdAt: string;
    updatedAt: string;
    isPinned: boolean;
    visible: boolean;
    name?: string;
    price?: number;
    promotion?: string;
    productCode?: string;
}

export type {
    HotItem,
    SetItem
}