import { Dialog, DialogTitle, DialogContent, Typography, IconButton, Box } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { LimitedItem } from 'asset/type/limited';

interface EditionDialogProps {
    open: boolean;
    selectedItem: LimitedItem | null;
    onClose: () => void;
}

export default function EditionDialog({ open, selectedItem, onClose }: EditionDialogProps) {
    if (!selectedItem) return null;

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth sx={{ zIndex: 1300 }}>
            <DialogTitle sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontWeight: 600,
                fontSize: '20px',
                backgroundColor: '#ffffff',

                padding: '16px 24px'
            }}>
                {selectedItem.name}
                <IconButton onClick={onClose} sx={{ color: '#333' }}>
                    <ClearIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ padding: '24px', backgroundColor: '#fff' }}>
                {/* Product Image */}
                <Box sx={{ mb: 2 }}>
                    <img
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '12px',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                            objectFit: 'cover',
                        }}
                    />
                </Box>

                {/* Price and Promotion */}
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                    ₩{selectedItem.price.toLocaleString()}
                </Typography>
                <Typography sx={{ mt: 1, color: '#999', fontStyle: 'italic' }}>
                    {selectedItem.promotion}
                </Typography>

                {/* Product Description */}
                <Typography sx={{ mt: 3, color: '#444', fontSize: '16px', lineHeight: 1.6 }}>
                    <strong>상세 설명:</strong> {selectedItem.detailDescription}
                </Typography>

                {/* Product Features */}
                <Box sx={{ mt: 3 }}>
                    <Typography sx={{ fontWeight: 'bold', color: '#333' }}>특징:</Typography>
                    <Box sx={{ mt: 1 }}>
                        {selectedItem.features.map((feature, index) => (
                            <Typography key={index} sx={{ color: '#555', fontSize: '14px', lineHeight: 1.6 }}>
                                - {feature}
                            </Typography>
                        ))}
                    </Box>
                </Box>

                {/* Available Sizes */}
                <Box sx={{ mt: 3 }}>
                    <Typography sx={{ fontWeight: 'bold', color: '#333' }}>사이즈 옵션:</Typography>
                    <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {selectedItem.sizes.map((size, index) => (
                            <Box
                                key={index}
                                sx={{
                                    backgroundColor: '#f9f9f9',
                                    borderRadius: '20px',
                                    padding: '8px 16px',
                                    fontSize: '14px',
                                    color: '#555',
                                    border: '1px solid #ddd',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#dcdcdc',
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            >
                                {size} mm
                            </Box>
                        ))}
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
}
