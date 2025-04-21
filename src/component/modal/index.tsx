import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from 'react';

export interface SimpleDialogProps {
    open: boolean;
    onClose: (value: string) => void;
    noticeId: number;
}

export default function NoitceDialog(props: SimpleDialogProps) {
    const { onClose, open, noticeId } = props;
    const [noticeData, setNoticeData] = useState<{
        id: string;
        title: string;
        content: string;
        category: string;
        image?: string;
        createdAt: string;
        updatedAt: string;
        isPinned: boolean;
        visible: boolean;
    } | null>(null);

    useEffect(() => {
        // JSON 데이터 가져오기
        fetch('/asset/data/notice.json') // 경로 수정
            .then((response) => response.json())
            .then((data) => {
                const notice = data.find((item: { id: number }) => item.id === noticeId);
                setNoticeData(notice || null);
            })
            .catch((error) => console.error('Error loading notice data:', error));
    }, [noticeId]);

    const handleClose = () => {
        onClose(String(noticeId));
    };

    if (!noticeData) {
        return null; // 데이터가 로드되지 않았을 때
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>{noticeData.title}
                <IconButton>
                    <ClearIcon onClick={handleClose} />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ pt: 0 }}>
                <Typography>
                    {noticeData.content}
                </Typography>
            </DialogContent>
        </Dialog>
    );
}