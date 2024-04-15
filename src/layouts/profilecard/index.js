import React from 'react';
import { Card } from 'react-bootstrap';
import { FiUser, FiKey } from 'react-icons/fi';
import Avatar from 'react-avatar';

const ProfileCard = ({ name, company, email, phone, password }) => {
    return (
        <Card className="profile-card" style={{ margin: '10px' }}>
            <Card.Header className="text-center rounded-top bg-transparent border-0">
                <Avatar name={name} round size="64" />
            </Card.Header>
            <Card.Body>
                <Card.Title className="text-center">{name}</Card.Title>
                <Card.Text>
                    <strong>Company:</strong> {company}
                </Card.Text>
                <Card.Text>
                    <strong>Email:</strong> {email}
                </Card.Text>
                <Card.Text>
                    <strong>Phone:</strong> {phone}
                </Card.Text>
                {/* Password and Change Password options */}
                <Card.Text>
                    <strong>Password:</strong> {password}
                </Card.Text>
                <Card.Text>
                    <a href="#">Change Password</a>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard;