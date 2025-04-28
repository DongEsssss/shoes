interface LimitedItem {
    id: string;
    title: string;
    content: string;
    category: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    isPinned: boolean;
    visible: boolean;
    name: string;
    price: number;
    promotion: string;
    productCode: string;
    detailDescription: string;
    features: string[];
    sizes: string[];

}

export type {
    LimitedItem
}