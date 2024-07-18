import { useEffect, useState } from 'react';

type User = {
    id: number;
    name: string;
};

/**
 * User list
 */
const Users = () => {
    const [data, setData] = useState<null | User[]>(null);
    const [error, setError] = useState<null | unknown>(null);
    const [loading, setLoading] = useState(false);

    /**
     * Fetch users
     */
    const fetchUsers = async () => {
        setLoading(true);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await response.json();

            setData(result);
            setError(null);
        } catch (error) {
            setData(null);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <div data-testid='loading'>Loading...</div>;
    }

    if (error) {
        return <div data-testid='error'>Error when fetching users...</div>;
    }

    return (
        <ul data-testid='users'>
            {data?.map((user) => (
                <li
                    data-testid='user'
                    key={user.id}
                >
                    {user.name}
                </li>
            ))}
        </ul>
    );
};

export default Users;
