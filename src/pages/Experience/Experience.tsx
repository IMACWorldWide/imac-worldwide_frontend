/* Experience.tsx */

// Import scss styles
import { Link, useParams } from 'react-router-dom';
import './Experience.scss';

// Importing React and necessary hooks
import TagContainer from '../../containers/TagContainer/TagContainer';
import Tag from '../../components/Tag/Tag';
import { useExperience } from '../../hooks/api';

import dayjs from 'dayjs';


export default function Experience() {

    const { id } = useParams(); // Extracting the 'id' parameter from the URL

    if (!id) return <div>Invalid experience ID</div>; // Check if id is valid

    const { experience, loading } = useExperience(id); // Using the custom hook to fetch experience data

    if (loading) return <div>Loading...</div>;

    return (
        <main className="experience">
            <div className="experience-header">
                <h1>{experience.relation.country.emoji} {experience.title}</h1>
                <h2 className='subtitle'>{dayjs(experience.departure_date).format("MMM YYYY")} - {dayjs(experience.return_date).format("MMM YYYY")}</h2>
                <Link to={`/relation/${experience.relation.code}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <Tag tag={{ code: experience.relation.code, name: experience.relation.name, emoji: experience.relation.country.emoji }} />
                </Link>
            </div>
            <div className="experience-content">
                <div>
                    <section>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, provident amet! Mollitia asperiores labore animi? Necessitatibus accusamus ab quis. Voluptatem sit quas non molestias eligendi animi ad sunt officia et.</p>
                    </section>
                    <section>
                        <h3>Cours</h3>
                        <div>
                            {experience.courses.map((course, index) => (
                                <div key={index} className="experience-course">
                                    <h4>{course.name}</h4>
                                    <p>{course.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
                <div className="experience-details">
                    <section>
                        <img src={experience.imageURL} alt={experience.title} />
                        <p>{experience.summary}</p>
                        <TagContainer tags={experience.tags} />
                        <p>{experience.relation.locations.join(", ")}</p>
                    </section>
                    <section className="experience-contact">
                        <h2>Contact</h2>
                        <div className="experience-contact-details">
                            <label>Name:</label>
                            <p>{experience.contact.name}</p>
                            <label>Email:</label>
                            <p>{experience.contact.email}</p>
                            <label>Phone:</label>
                            <p>{experience.contact.phone}</p>
                            <label>LinkedIn:</label>
                            <p>{experience.contact.linkedin}</p>
                            <label>Discord:</label>
                            <p>{experience.contact.discord}</p>
                            <label>Instagram:</label>
                            <p>{experience.contact.instagram}</p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}