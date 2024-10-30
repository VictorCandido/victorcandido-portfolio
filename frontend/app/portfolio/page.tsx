'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

// This would typically come from an API or database in a real SaaS application
const portfolioData = {
  name: "Víctor Cândido",
  title: "Senior Software Engineer",
  location: "São Paulo, BR",
  email: "victorev@outlook.com",
  github: "https://github.com/victorcandido",
  linkedin: "https://linkedin.com/in/victor-ev-candido",
  bio: "Passionate about building scalable web applications and solving complex problems.",
  profileImage: "https://github.com/victorcandido.png",
  technologies: ["React", "Node.js", "Next.js", "Angular", "Typescript", "Docker", "PostgreSQL"],
  projects: [
    {
      title: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform with React, Node.js, and PostgreSQL.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "AI-powered Chatbot",
      description: "Developed a chatbot using natural language processing and machine learning techniques.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Created an interactive dashboard for visualizing complex datasets using D3.js and React.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
  experience: [
    {
      company: "Tech Innovators Inc.",
      title: "Senior Software Engineer",
      period: "Jan 2020 - Present",
      description: "Lead development of microservices architecture, mentored junior developers, and implemented CI/CD pipelines.",
    },
    {
      company: "StartUp Solutions",
      title: "Software Engineer",
      period: "Mar 2017 - Dec 2019",
      description: "Developed and maintained multiple web applications using React and Node.js.",
    },
    {
      company: "CodeCraft Systems",
      title: "Junior Developer",
      period: "Jun 2015 - Feb 2017",
      description: "Assisted in the development of internal tools and contributed to client projects.",
    },
  ],
}

export default function Component() {
  const [activeTab, setActiveTab] = useState("projects")

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Image
              src={portfolioData.profileImage}
              alt={portfolioData.name}
              width={200}
              height={200}
              className="rounded-full border-4 border-primary-foreground"
            />
            <div>
              <h1 className="text-4xl font-bold mb-2">{portfolioData.name}</h1>
              <p className="text-xl mb-4">{portfolioData.title}</p>
              <div className="flex items-center mb-4">
                <MapPin className="mr-2" size={18} />
                <span>{portfolioData.location}</span>
              </div>
              <p className="mb-4">{portfolioData.bio}</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="sm">
                  <Mail className="mr-2" size={18} />
                  Contact
                </Button>
                <Button variant="secondary" size="sm">
                  <Github className="mr-2" size={18} />
                  GitHub
                </Button>
                <Button variant="secondary" size="sm">
                  <Linkedin className="mr-2" size={18} />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {portfolioData.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </section>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>
          <TabsContent value="projects">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portfolioData.projects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="experience">
            <div className="space-y-6">
              {portfolioData.experience.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.company} • {job.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}