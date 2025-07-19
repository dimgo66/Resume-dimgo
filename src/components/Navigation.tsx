import { useState, useEffect } from 'react'
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Code, 
  BookOpen, 
  Mail,
  Palette
} from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

interface NavigationProps {
  className?: string
}

const Navigation = ({ className = '' }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState('about')
  const isMobile = useIsMobile()

  const navigationItems = [
    { id: 'about', label: 'Обо мне', icon: User },
    { id: 'experience', label: 'Опыт', icon: Briefcase },
    { id: 'skills', label: 'Навыки', icon: Code },
    { id: 'collaboration', label: 'Сотрудничество', icon: Palette },
    { id: 'education', label: 'Образование', icon: GraduationCap },
    { id: 'projects', label: 'Проекты', icon: BookOpen },
    { id: 'contact', label: 'Контакты', icon: Mail },
  ]

  // Intersection Observer для отслеживания активной секции
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0.1,
      }
    )

    // Наблюдаем за всеми секциями
    navigationItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      navigationItems.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  // Не показывать на мобильных устройствах
  if (isMobile) return null

  return (
    <nav className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 ${className}`}>
      <div className="bg-card/80 backdrop-blur-md rounded-2xl shadow-lg border border-border p-2">
        <div className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative flex items-center w-full p-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                    : 'hover:bg-primary/10 text-muted-foreground hover:text-primary hover:scale-105'
                }`}
                title={item.label}
              >
                <Icon className="w-5 h-5" />
                
                {/* Tooltip */}
                <span className="absolute right-full mr-3 px-2 py-1 bg-foreground text-background text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.label}
                </span>
                
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navigation

