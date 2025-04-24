import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    IconButton,
    Box,
    Chip,
    Divider
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from 'react';
import { noitce } from 'asset/type/notice';

export interface SimpleDialogProps {
    open: boolean;
    onClose: (value: string) => void;
    noticeId: number;
}

export default function NoticeDialog(props: SimpleDialogProps) {
    const { onClose, open, noticeId } = props;
    const [noticeData, setNoticeData] = useState<noitce>();

    useEffect(() => {
        fetch('/asset/data/notice.json')
            .then((response) => response.json())
            .then((data) => {
                const notice = data.find((item: { id: number }) => item.id === noticeId);
                setNoticeData(notice);
            })
            .catch((error) => console.error('Error loading notice data:', error));
    }, [noticeId]);

    const handleClose = () => {
        onClose(String(noticeId));
    };

    if (!noticeData) return (
        <Dialog onClose={handleClose} open={open} maxWidth="sm" fullWidth>
            <DialogTitle>Loading...</DialogTitle>
        </Dialog>
    );

    return (
        <Dialog onClose={handleClose} open={open} maxWidth="sm" fullWidth>
            <DialogTitle sx={{ p: 2, pb: 0 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box>
                        <Typography variant="h6" fontWeight={700} mt={1} display={'flex'} alignItems={'center'} gap={1}>
                            <Chip label={noticeData.category} color="primary" size="small" />
                            {noticeData.title}
                        </Typography>
                    </Box>
                    <IconButton onClick={handleClose}>
                        <ClearIcon />
                    </IconButton>
                </Box>
                <Typography variant="caption" color="text.secondary">
                    등록일: {new Date(noticeData.createdAt).toLocaleDateString()}
                </Typography>
                <Divider sx={{ mt: 2 }} />
            </DialogTitle>

            <DialogContent sx={{ pt: 2 }}>
                {noticeData.image && (
                    <Box
                        component="img"
                        src={noticeData.image}
                        alt="공지 이미지"
                        sx={{ width: '100%', borderRadius: 2, mb: 2 }}
                    />
                )}
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                    {noticeData.content}
                </Typography>
            </DialogContent>
        </Dialog>
    );
}
