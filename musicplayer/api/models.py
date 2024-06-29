from django.db import models
import random, string

def generate_uniquie_code():
    code = ''.join(random.choice(string.ascii_uppercase))
    while True:
        if Room.objects.filter(code=code).count()==0:
            break
    return code




class Room(models.Model):
    code = models.CharField(max_length=8, default=generate_uniquie_code, unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)