import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <CardActionArea href={project.link} target="_blank" rel="noopener noreferrer">
        <CardMedia
          component="img"
          image={project.image}
          alt={project.title}
          height="140"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Project 1",
      description: "This is the first project in the portfolio.",
      image: "https://picsum.photos/id/1015/400/300",
      link: "https://example.com/project1",
    },
    {
      title: "Project 2",
      description: "This is the second project in the portfolio.",
      image: "https://picsum.photos/id/1016/400/300",
      link: "https://example.com/project2",
    },
    {
      title: "Project 3",
      description: "This is the third project in the portfolio.",
      image: "https://picsum.photos/id/1018/400/300",
      link: "https://example.com/project3",
    },
  ];

  return (
    <div>
      <Typography variant="h2">Portfolio</Typography>
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
