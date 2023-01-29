package services

import (
	"github.com/zaebee/litclub/backend/models"
	"github.com/zaebee/litclub/backend/repositories"
	"log"
	"sync"
)

// Singleton setup
var singleton *UserService
var once sync.Once

type UserService struct {
	userRepository *repositories.UserRepository
}

// GetUserServiceInstance returns instance of User service.
func GetUserServiceInstance() *UserService {
	once.Do(func() {
		singleton = &UserService{}
		singleton.userRepository = repositories.GetUserRepositoryInstance()
	})

	// create initial admin user if not existent in db
	if user := singleton.GetByUsername("admin"); user == nil {

		admin := &models.User{
			Username: "admin",
			Password: "1234",
			Role:     models.User_ROLE_ADMIN,
		}

		singleton.Create(admin)
	}

	return singleton
}

// GetByUsername returns User instance from given username.
func (us *UserService) GetByUsername(username string) *models.User {
	return us.userRepository.GetByUsername(username)
}

// GetByID return User instance from given ID.
func (us *UserService) GetByID(id string) *models.User {
	return us.userRepository.GetByID(id)
}

// Create creates user instance.
func (us *UserService) Create(user *models.User) *models.User {
	hash, err := HashPassword(user.Password)
	if err != nil {
		log.Fatal(err)
		return user
	}

	user.Password = hash

	return us.userRepository.Create(user)
}

// GetAll returns all User instances from repository.
func (us *UserService) GetAll() []*models.User {
	return us.userRepository.GetAll()
}
