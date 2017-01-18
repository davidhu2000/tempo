# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  first_name      :string
#  last_name       :string
#  image_url       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base

  validates :username, uniqueness: true, allow_blank: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: { message: "Password cannot be blank" }
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :session_token, presence: true

  has_many :playlists

  has_many :playlist_follows
  has_many :followed_playlists, through: :playlist_follows, source: :playlist

  after_initialize :ensure_session_token, :ensure_username, :ensure_profile_image

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user = User.find_by(email: username) unless user
    user && user.valid_password?(password) ? user : nil
  end

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_username
    self.username = self.email if self.username.empty?
  end

  def ensure_profile_image
    self.image_url = Faker::Avatar.image if self.image_url.empty?
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(128)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
