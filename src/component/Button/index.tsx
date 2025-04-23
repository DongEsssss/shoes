import { Button } from '@mui/material'
import React from 'react'

interface ButtonProps {
    text: string
}

export default function index({ text }: ButtonProps) {
    return (
        <Button
            sx={{
                bgcolor: '#000', color: '#fff', borderRadius: '8px', px: 2,
                '&:hover': { bgcolor: '#333' },
            }}
        >
            {text}
        </Button>
    )
}
