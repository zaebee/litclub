package repositories

import (
	"github.com/jinzhu/gorm"
	"github.com/zaebee/litclub/backend/config"
	"github.com/zaebee/litclub/backend/models"
	"sync"
)

// needed for singleton pattern
var singleton *UserRepository
var once sync.Once

// general struct
type UserRepository struct {
	db *gorm.DB
}

// singleton instance getter
func GetUserRepositoryInstance() *UserRepository {
	once.Do(func() {
		singleton = &UserRepository{}
		singleton.db = config.GetDB()
	})
	return singleton
}

// Repository methods
func (ur *UserRepository) GetByUsername(username string) *models.User {
	// initialize user
	u := &models.User{}

	// fetch database
	err := ur.db.Table("users").Where("username = ?", username).First(&u).Error
	if err == gorm.ErrRecordNotFound {
		return nil
	}
	return u
}

func (ur *UserRepository) GetByID(id string) *models.User {
	u := &models.User{}
	err := ur.db.Table("users").Where("id = ?", id).First(&u).Error
	if err == gorm.ErrRecordNotFound {
		return nil
	}
	return u
}

func (ur *UserRepository) Create(user *models.User) *models.User {
	err := ur.db.Table("users").Create(user).Error
	if err == gorm.ErrInvalidTransaction {
		return nil
	}
	return user
}

func (ur *UserRepository) GetAll() []*models.User {
	var users []*models.User
	err := ur.db.Table("users").Find(&users).Error
	if err == gorm.ErrRecordNotFound {
		return nil
	}
	return users
}
