import React, { useState } from 'react'
import { Badge, Card, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

export default function Job({ job }) {
   
    const [open, setOpen] = useState(false)

    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>{job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge variant="seconday" className="mr-2" style={{ color: 'black' }}>{job.type}</Badge>
                        <Badge variant="secondary" style={{ color: 'black' }}>{job.location}</Badge>
                        <div className="mb-3">
                            <a href={job.how_to_apply}>Click here to apply</a>
                        </div>
                    </div>
                </div>
                <Card.Text>
                    <Button
                        onClick={() => setOpen(prevOpen => !prevOpen)}
                        variant="primary"
                    >
                        {open ? 'Hide Details' : 'View Details'}
                    </Button>
                </Card.Text>
                <Collapse in={open}>
                <div className="mt-4">
                    <ReactMarkdown children={job.description} />
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
        
    )
}