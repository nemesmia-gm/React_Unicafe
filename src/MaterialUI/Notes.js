import {Link} from "react-router-dom";
import React from "react";
import {Table, TableBody, TableCell, TableContainer, TableRow} from '@material-ui/core'

const Notes = ({notes}) => (
    <div>
        <h2>Notes</h2>
        <TableContainer>
            <Table>
                <TableBody>
                    {notes.map(note => (
                        <TableRow key={note.id}>
                            <TableCell>
                                <Link to={`/notes/${note.id}`}>{note.content}</Link>
                            </TableCell>
                            <TableCell>
                                {note.name}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
)

export default Notes
