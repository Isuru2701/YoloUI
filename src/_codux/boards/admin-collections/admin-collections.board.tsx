import React from 'react';
import { createBoard } from '@wixc3/react-board';
import AdminCollections from '../../../components/admin/AdminCollections';

export default createBoard({
    name: 'AdminCollections',
    Board: () => <AdminCollections />,
    isSnippet: true,
});