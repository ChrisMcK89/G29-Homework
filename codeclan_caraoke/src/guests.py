class Guest:
    def __init__(self, name, wallet, fav_song):
        self.name = name
        self.wallet = wallet
        self.fav_song = fav_song
        
    def check_wallet(self):
        return self.wallet

    def reduce_wallet_by_fee(self, fee):
        self.wallet -= fee
        return self.wallet
